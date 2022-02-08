const { Router } = require("express");

const app = Router();

app
  .get("/", (req, res) => {
    res.render("home", {
      title: "Hello",
      msg: "Bienvenue dans ma page de test !!",
    });
  })
  .get("/users", (req, res) => {
    res.render("users", {
      title: "Hello users",
      msg: "Bienvenue dans la liste des utilisateurs !!",
      users: [1, 2, 3]
    });
  })
  .get("/users/:id", (req, res) => {
    res.render("users", {
      title: "Hello user",
      msg: "Bienvenue dans la page de l'utilisateur " + req.params.id + " !!",
    });
  })
  .use("/*", (req, res) => {
    res.render("notFound");
  });

module.exports = app;
