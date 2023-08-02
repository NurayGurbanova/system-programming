CREATE TABLE Cars (
    carid int PRIMARY KEY,
    Make int,
    Model nvarchar(15),
    [Year] date,
    VIN nvarchar(15),
	Mileage int, 
	City int, 
	EngineVolume int,
	HorsePower int,
	PassengerCount int,
	Price int,
	PhoneNumber varchar(25)
);



CREATE TABLE Showrooms (
	ShowroomsId INT IDENTITY(1,1) PRIMARY KEY,
	[Name] nvarchar(255) ,
	[PhoneNumber] char(25),
	[Address] nvarchar(255) ,
	carid int,
	FOREIGN KEY (carid) REFERENCES Cars(carid)
);


CREATE TABLE BodyTypes ( 
	BodyTypesId INT IDENTITY(1,1) PRIMARY KEY ,
	[bodies] varchar(255),
	carid int,
	FOREIGN KEY (carid) REFERENCES Cars(carid)
);
CREATE TABLE Cities (
	CitiesId INT IDENTITY(1,1) PRIMARY KEY,
	[Name] varchar(255),
	carid int,
	FOREIGN KEY (carid) REFERENCES Cars(carid)
);

CREATE TABLE Colors (
	ColorsId INT IDENTITY(1,1) PRIMARY KEY , 
	[Name] varchar(255),
	carid int,
	FOREIGN KEY (carid) REFERENCES Cars(carid)
);

CREATE TABLE WheelDriveTypes (
	WheelDriveTypesId INT IDENTITY(1,1) PRIMARY KEY ,
	[Name] varchar(255),
	carid int,
	FOREIGN KEY (carid) REFERENCES Cars(carid)
);

CREATE TABLE FuelType (
	FuelTypeId INT IDENTITY(1,1) PRIMARY KEY, 
	[Name] varchar(255),
	carid int,
	FOREIGN KEY (carid) REFERENCES Cars(carid)
);

CREATE TABLE TranspissionTypes (
	TranspissionTypesId INT IDENTITY(1,1) PRIMARY KEY,
	[Name] varchar(255),
	carid int,
	FOREIGN KEY (carid) REFERENCES Cars(carid)
);
