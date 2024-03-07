DROP DATABASE IF EXISTS `addressbook`;
CREATE DATABASE `addressbook`;

use `addressbook`;

CREATE TABLE `Addresses`(
	ID int PRIMARY KEY AUTO_INCREMENT,
    Address varchar(255)
);

CREATE TABLE `People`(
	ID int primary key AUTO_INCREMENT,
    Firstname varchar(255),
    Lastname varchar(255)
);

CREATE TABLE `PersonAddresses`(
	ID int PRIMARY KEY AUTO_INCREMENT,
    PersonID int,
    AddressID int,
    
    FOREIGN KEY(`PersonID`)
		REFERENCES `People`(`ID`),
	FOREIGN KEY(`AddressID`)
		REFERENCES `Addresses`(`ID`)
);

INSERT INTO `Addresses`(Address)
			VALUES('New York'),('LA');
INSERT INTO `People`(Firstname, Lastname)
			VALUES('John','Doe'),('Lana','Hana');
INSERT INTO `PersonAddresses`(PersonID,AddressID)
			VALUES(1,1),(2,2);
            
SELECT People.ID, Firstname, Lastname, Address
		FROM `People`
        INNER JOIN `PersonAddresses`
			ON People.ID = PersonAddresses.PersonID
		INNER JOIN `Addresses`
			ON PersonAddresses.AddressID = Addresses.ID