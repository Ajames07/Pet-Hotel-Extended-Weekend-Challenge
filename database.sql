CREATE TABLE "pet_log" (
"id" SERIAL PRIMARY KEY,
"owner_id" integer REFERENCES "owners", 
"pet_name" VARCHAR (25) NOT NULL,
"breed" VARCHAR (20) NOT NULL,
"color" VARCHAR(25) NOT NULL,
"checked_in" DATE
);

CREATE TABLE "owners" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR (20) NOT NULL
);

INSERT INTO "pet_log" ("owner_id", "pet_name", "breed", "color", "checked_in")
VALUES ('1','Tiffany','cat','grey',NULL),('2','Fivy','cat','black & white', NULL),('1','Odin','dog','white',NULL),('1','oscar','cat','white',NULL),('2','baby','cat','sand',NULL);
INSERT INTO "owners" ("number_of_pets")
VALUES ('0'),('1');


SELECT * FROM "pet_log" JOIN "owners" ON "pet_log"."owner_id" = "owners"."id";
SELECT "owners".*, COUNT("pet_log") FROM "pet_log" JOIN "owners" ON "owners"."id" = "pet_log"."owner_id" GROUP BY "owners"."id";