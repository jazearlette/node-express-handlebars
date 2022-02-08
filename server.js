const express = require("express");
const app = require("./app");
const { engine } = require("express-handlebars");

require('dotenv').config();

const PORT = process.env.PORT || 3030;
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.set('view engine', 'handlebars');
server.engine('handlebars', engine({
    layoutsDir: `${__dirname}/views/layouts`,
}));
server.use("/static", express.static("public/"));

server.use("/", app);

server.listen(PORT, () => {
  console.log(
    `Server started on port ${PORT}. Use http://localhost:${PORT} to access it.`
  );
});
