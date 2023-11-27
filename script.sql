CREATE TABLE Customer (
    Customer_ID int IDENTITY(1,1) PRIMARY KEY,
    Customer_Name varchar(250) not null,
    Customer_Email varchar(250) not null,
    Customer_Password varchar(250) not null,
    Customer_Balance float not null
);


CREATE TABLE Movie (
    Movie_ID int IDENTITY(1,1) PRIMARY KEY,
    Movie_Name varchar(250) not null,
    Movie_Desc varchar(250) not null,
    Movie_Genre varchar(250) not null,
    Movie_Poster varchar(250) not null,
    Movie_Rating float not null,
    Movie_ReleaseDate date not null, 
    Movie_Duration time not null 
);


CREATE TABLE Room (
    Room_ID int IDENTITY(1,1) PRIMARY KEY,
    Movie_ID int not null,
    Room_SeatCapacity int not null,
    Room_Type int not null,
    Room_Name varchar(250) not null,
    FOREIGN KEY (Movie_ID) REFERENCES Movie(Movie_ID)
);

CREATE TABLE Booking (
    Booking_ID int IDENTITY(1,1) PRIMARY KEY,
    Customer_ID int not null,
    Booking_Date datetime not null, 
    Booking_Quantity int not null,
    Movie_ID int not null,
    FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID),
    FOREIGN KEY (Movie_ID) REFERENCES Movie(Movie_ID)
);


CREATE TABLE Ticket (
    Ticket_ID int IDENTITY(1,1) PRIMARY KEY,
    Booking_ID int not null,
    Ticket_Number int not null,
    Ticket_Price float not null, 
    FOREIGN KEY (Booking_ID) REFERENCES Booking(Booking_ID)
);

CREATE TABLE Seats (
    Seats_ID int IDENTITY(1,1) PRIMARY KEY,
    Ticket_ID int not null,
    Room_ID int not null,
    Seat_Number int not null,
    Seat_IsAvailable bit not null, 
    FOREIGN KEY (Room_ID) REFERENCES Room(Room_ID),
    FOREIGN KEY (Ticket_ID) REFERENCES Ticket(Ticket_ID)
);


INSERT INTO Movie (Movie_Name, Movie_Desc, Movie_Genre, Movie_Rating, Movie_ReleaseDate, Movie_Duration, Movie_Poster) VALUES
('Captain America: The First Avenger', 'Superhero movie.', 'Action/Adventure', 8.0, '2011-07-22', '02:04:00', 'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg'),
('The Toxic Avenger', 'Cult classic superhero film.', 'Action/Comedy', 6.3, '1984-05-01', '01:22:00', 'https://m.media-amazon.com/images/M/MV5BNzViNmQ5MTYtMmI4Yy00N2Y2LTg4NWUtYWU3MThkMTVjNjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'),
('The Toxic Avenger Part II', 'Sequel to the cult superhero film.', 'Action/Comedy', 5.1, '1989-02-24', '01:42:00', 'https://m.media-amazon.com/images/M/MV5BODhiNTljYTctMmIzZC00ZGVkLTk2NmItN2RjMzY3ZTYyNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'),
('Citizen Toxie: The Toxic Avenger IV', 'Fourth installment of the Toxic Avenger series.', 'Action/Comedy', 6.3, '2000-11-01', '01:48:00', 'https://m.media-amazon.com/images/M/MV5BMWI0NWY0ODUtNGY3Yy00ZDU1LTllYjUtMDFkYWEzZGQwY2I1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'),
('The Toxic Avenger Part III: The Last Temptation of Toxie', 'Third part of the Toxic Avenger series.', 'Action/Comedy', 4.4, '1989-11-24', '01:42:00', 'https://m.media-amazon.com/images/M/MV5BNjVlNzFjMGItMTEwYy00OTc0LWFmY2ItM2U0MmQyYWI5Njk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'),
('Avenger', 'Drama based on the novel Avenger by Frederick Forsyth.', 'Drama/Thriller', 5.7, '2006-04-09', '01:32:00', 'https://m.media-amazon.com/images/M/MV5BMTMzMjMwMjcyNl5BMl5BanBnXkFtZTcwNTA1NDgzMQ@@._V1_SX300.jpg'),
('Knives of the Avenger', 'Viking-themed adventure film.', 'Adventure', 5.8, '1966-03-30', '01:30:00', 'https://m.media-amazon.com/images/M/MV5BNzcxYjhjMDAtZmY4Yi00NmJlLTg4NDItNDBmYzljYzA3MmJmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg'),
('Samurai Avenger: The Blind Wolf', 'A blind man seeks revenge against a psychopath.', 'Action', 6.0, '2009-02-20', '01:32:00', 'https://m.media-amazon.com/images/M/MV5BMTAwNjc4MTkyNjBeQTJeQWpwZ15BbWU3MDg3NTQyMzI@._V1_SX300.jpg'),
('The Avenger', 'Peplum film inspired by the tale of Orestes.', 'Action/Drama', 6.1, '1962-09-07', '01:50:00', 'https://m.media-amazon.com/images/M/MV5BMjNmOTEzN2YtYTcyMC00NDQ1LTg5NTMtMjQ3M2ZlOGU2YmFkXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg'),
('The Avenger', 'Film based on the Italian comic book.', 'Action', 5.9, '1960-12-15', '01:40:00', 'https://m.media-amazon.com/images/M/MV5BNzU5YzM3MmEtNTE2MS00MzVjLWI5Y2EtNGU3M2YwMGYzMGQ0XkEyXkFqcGdeQXVyMDExMzA0Mw@@._V1_SX300.jpg');
