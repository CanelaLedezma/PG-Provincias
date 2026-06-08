CREATE TABLE provinces (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    full_name VARCHAR(250) NOT NULL,
    latitude NUMERIC(9,6) NOT NULL,
    longitude NUMERIC(9,6) NOT NULL,
    display_order INTEGER
);

INSERT INTO provinces (name, full_name, latitude, longitude, display_order)
VALUES 
('Buenos Aires', 'Provincia de Buenos Aires', -36.000000, -60.000000, 1),
('Cordoba', 'Provincia de Cordoba', -31.400000, -64.100000, 2);