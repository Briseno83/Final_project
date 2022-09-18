create database video;
use video;
create table movies (
num int,
displaytext varchar(60),
Link varchar(70),
primary key (displaytext)
);
CREATE TABLE accounts (
	id int(11) NOT NULL AUTO_INCREMENT,
  	username varchar(50) NOT NULL,
  	password varchar(255) NOT NULL,
  	email varchar(100) NOT NULL,
    PRIMARY KEY (id)
) ;
create table matrix_video (
name_cust varchar(30),
phone varchar(20),
email varchar(20),
Video_rented varchar(60),
price float,
delivery_fee float,
total_price float,
primary key (phone)
);