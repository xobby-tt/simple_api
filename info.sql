
CREATE TABLE IF NOT EXISTS info (
	id SERIAL,
	PRIMARY KEY(id),
	category text,
	subcategory text,
	person text,
	cash int,
	date date,
	comment" text
)
	
\c info


INSERT INTO info (name, breed, age, sex)
  VALUES ("продукты", "магазин", "муж", "300", "April 4, 2018 10:13:00", "купил икру");
