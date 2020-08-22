create schema critical_thinking;

use critical_thinking;

insert into category (id, name) values (1, 'Nadrilekarstvo');
insert into category (id, name) values (2, 'Teorije zavere');
insert into category (id, name) values (3, 'Antiteizam');
insert into category (id, name) values (4, 'Pseudonauka');
insert into category (id, name) values (5, 'Čulne obmane');
insert into category (id, name) values (6, 'Logičke greške');
insert into category (id, name) values (7, 'Kognitivne pristrasnosti');
insert into category (id, name) values (8, 'Politička propaganda');
insert into category (id, name) values (9, 'Ekonomska propaganda');
insert into category (id, name) values (10, 'Kritički instrumenti');
insert into category (id, name) values (11, 'Prevare');
insert into category (id, name) values (12, 'Raskrinkavanje');
insert into category (id, name) values (13, 'Popularizacija nauke');
insert into category (id, name) values (14, 'Medijska pismenost');
insert into category (id, name) values (15, 'Pamet i glupost');
insert into category (id, name) values (16, 'Mudrost življenja');
insert into category (id, name) values (17, 'Paradoksi');
insert into category (id, name) values (18, 'Ostalo');

insert into security_user (username, password, first_name, last_name) values 
('admin', '$2a$04$shVeU9ILtl1gtGYzYesxhOkYFrBZeK9lHWczsarqv2iNBczuSKl1K', 'Admin', 'Admin');

-- insert authorities
insert into security_authority (name) values ('ROLE_ADMIN');

-- insert mappings between users and authorities
insert into security_user_authority (user_id, authority_id) values (1, 1); -- admin has ROLE_ADMIN


