CREATE TABLE helo_users (
    id SERIAL PRIMARY key,
    username VARCHAR NOT null,
    password VARCHAR NOT null,
    profile_pic TEXT 
    );

CREATE TABLE helo_posts (
id SERIAL PRIMARY key,
title VARCHAR(45) NOT null,
content TEXT,
img TEXT,
author_id INTEGER REFERENCES helo_users(id),
date_created TIMESTAMP 
)

INSERT INTO helo_users (username, password, profile_pic)
VALUES ('Brando', 'Hammy234_','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fcool-profile-pictures&psig=AOvVaw0KfAEM5tW4F-NhloG0rBlO&ust=1616871919554000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDYwbXTzu8CFQAAAAAdAAAAABAD')


