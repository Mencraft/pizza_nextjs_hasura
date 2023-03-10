-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- SET check_function_bodies = false;
--
-- CREATE TABLE pizza(
-- id serial NOT NULL, title varchar NOT NULL,
--   CONSTRAINT pizza_pkey PRIMARY KEY(id)
-- );
--
-- CREATE TABLE pizza_order(
--   id serial NOT NULL,
--   pizza_id integer NOT NULL,
--   friend_id integer NOT NULL,
--   CONSTRAINT pizza_order_pkey PRIMARY KEY(id)
-- );
--
-- CREATE TABLE friend
--   (id serial NOT NULL, "name" text NOT NULL, CONSTRAINT friend_pkey PRIMARY KEY(id))
--   ;
--
-- CREATE TABLE pizza_topping_pizza(
--   id serial NOT NULL,
--   pizza_id integer NOT NULL,
--   pizza_topping_id integer NOT NULL,
--   CONSTRAINT pizza_topping_pizza_pkey PRIMARY KEY(id)
-- );
--
-- CREATE TABLE pizza_topping(
--   id integer NOT NULL,
--   title text NOT NULL,
--   emoji text NOT NULL,
--   avaliable boolean NOT NULL,
--   CONSTRAINT pizza_topping_pkey PRIMARY KEY(id)
-- );
--
-- ALTER TABLE pizza_order
--   ADD CONSTRAINT pizza_order_pizza_id_fkey
--     FOREIGN KEY (pizza_id) REFERENCES pizza (id);
--
-- ALTER TABLE pizza_order
--   ADD CONSTRAINT pizza_order_friend_id_fkey
--     FOREIGN KEY (friend_id) REFERENCES friend (id);
--
-- ALTER TABLE pizza_topping_pizza
--   ADD CONSTRAINT pizza_topping_pizza_pizza_id_fkey
--     FOREIGN KEY (pizza_id) REFERENCES pizza (id);
--
-- ALTER TABLE pizza_topping_pizza
--   ADD CONSTRAINT pizza_topping_pizza_pizza_topping_id_fkey
--     FOREIGN KEY (pizza_topping_id) REFERENCES pizza_topping (id);
