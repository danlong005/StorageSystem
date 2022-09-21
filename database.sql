create table users (
    id bigint generated always as identity,
    "firstName" varchar(255),
    "lastName" varchar(255),
    email varchar(255),
    password varchar(255),
    "createdAt" timestamp,
    "updatedAt" timestamp,
    primary key (id)
);

create table bins (
    id bigint generated always as identity,
    name varchar(255),
    "userId" bigint,
    "createdAt" timestamp,
    "updatedAt" timestamp,
    primary key (id)
);

create table items (
    id bigint generated always as identity,
    "binId" bigint,
    name varchar(255),
    image varchar(255),
    "createdAt" timestamp,
    "updatedAt" timestamp,
    primary key (id)
);
