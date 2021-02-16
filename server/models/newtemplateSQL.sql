-- deletes old table
DROP TABLE IF EXISTS tasks;

-- not sure if id is needed in tasks
-- not sure if phase_id is a primary or foregin key
CREATE TABLE tasks(
    _id serial PRIMARY KEY,
    details varchar NOT NULL,
    person varchar NOT NULL,
    phases varchar NOT NULL 
    --  phases ID is a foreign table's ID.
);

-- not sure if phases should take input as string or number
insert into tasks (_id, details, person, phases) values (DEFAULT, 'Wireframe', 'Vicki', 2 );
insert into tasks (_id, details, person, phases) values (DEFAULT, 'Schema', 'Reuben', 2);

