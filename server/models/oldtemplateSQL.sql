DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS phases;
-- not sure if id is needed in tasks
-- not sure if phase_id is a primary or foregin key
CREATE TABLE tasks(
    _id serial PRIMARY KEY,
    details varchar NOT NULL,
    person varchar NOT NULL,
    phases_id varchar NOT NULL 
    --  phases ID is a foreign table's ID.
);

CREATE TABLE phases(
    _id serial PRIMARY KEY, -- this is the info we want to use to retrieve tasks at phases_id
    phasesname varchar NOT NULL, --
    FOREIGN KEY (phasesname) 
        REFERENCES tasks(phases_id)
);

insert into tasks (_id, details, person, phases_id) values (DEFAULT, 'Wireframe', 'Vicki','1');
insert into tasks (_id, details, person, phases_id) values (DEFAULT, 'Schema', 'Reuben','2');

insert into images (_id, phasesname) values (DEFAULT, 'To Do');
insert into images (_id, phasesname) values (DEFAULT, 'Next');