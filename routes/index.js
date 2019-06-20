const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "tmp/" });
const fs = require("fs");

app.post("/uploaddufichier", upload.array(`monfichier`, 5), function(
  req,
  res,
  next
) {
  fs.rename(req.file.path, "public/images/" + req.file.originalname, function(
    err
  ) {
    if (err) {
      res.send("problème durant le déplacement");
    } else {
      res.send("Fichier uploadé avec succès");
    }
  });
});

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

(module.exports = router), index;
