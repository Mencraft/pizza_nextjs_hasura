import {subscriptionExchange,defaultExchanges,ExchangeInput} from '@urql/core'
import {  withUrqlClient } from 'next-urql';
import {createClient as createWSClient}  from 'graphql-ws'
import {ExchangeIO, createClient} from "urql"

const isServer = typeof window === "undefined"

const wsClient = ()=> 
    createWSClient({
        url:(process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string).replace(
            "https",
            "ws"
        ),
        connectionParams:async()=>{
            return isServer ? {
                headers: { 
                    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET as string
                }
            }:{}
        }
    })

const noopExchange = ({ forward}: ExchangeInput):ExchangeIO =>{
    return (operations$) => {
        const operationResult$ = forward(operations$);
        return operationResult$
    }
}

const subscriptionOrNoopExchange = ()=> 
isServer
? noopExchange
: subscriptionExchange({
    forwardSubscription:(operation)=>{
        return {
            subscribe:(sink)=> ({
                unsubscribe:wsClient().subscribe(operation,sink)
            })
        }
    }
})

const clientConfig = {
    url:process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string,
    fetchOptions:()=>{
        return isServer ? {
            headers: { 
                'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET as string
            }
        }:{}
    },
    exchanges:[...defaultExchanges,subscriptionOrNoopExchange()]
}

export const client = createClient(clientConfig)

export default withUrqlClient((ssrExchange)=>{
     const exchanges = [...clientConfig.exchanges,ssrExchange];
    return {...client,exchanges}
})