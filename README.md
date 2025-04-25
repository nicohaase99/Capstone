# Capstone1

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

##
Client-list component provides a form to fill out basic user information. 

###
Scheduling component pulls user information and allows user to schedule an appointment on a separate page. 

####
thank-you component pulls input data from both the client-list component and the scheduling component and confirms appointment scheduling with a thank you note. 

#####
MYSQL Database formats for both client-form component and scheduling component:

CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    zip_code VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE scheduling (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    number_of_people INT NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);