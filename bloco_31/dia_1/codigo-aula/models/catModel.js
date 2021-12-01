const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "live_lecture_31_1",
  password: "secret",
});

const getAll = async () => {
  const [cats] = await connection.execute(
    "SELECT name, age FROM live_lecture_31_1.cats"
  );
  return cats;
};

const add = async (name, age) =>
  connection.execute(
    "INSERT INTO live_lecture_31_1.cats (name, age) VALUES (?,?)",
    [name, age]
  );

const isValid = (name, age) =>
  typeof name === "string" &&
  name.length >= 3 &&
  name.length < 30 &&
  age &&
  age > 0;

module.exports = {
  getAll,
  add,
  isValid,
};
