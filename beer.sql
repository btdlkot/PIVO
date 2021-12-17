create TABLE beers (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    price INTEGER,
    maker_id INTEGER,
    FOREIGN KEY (maker_id) REFERENCES makers(id) ON DELETE CASCADE
);

create TABLE makers (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255)
);

create TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    mail VARCHAR(255)
);

create TABLE evaluations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    beer_id INTEGER,
    comment VARCHAR(255),
    evaluation INTEGER NOT NULL CHECK (evaluation > 0 AND evaluation < 6),
    CONSTRAINT evaluation_unique UNIQUE(user_id, beer_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (beer_id) REFERENCES beers(id) ON DELETE CASCADE
);