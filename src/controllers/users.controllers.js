const express = require("express");

const {
  upload,
  uploadSingle,
  uploadMultiple,
} = require("../middlewares/file-upload");

const { User, gallery } = require("../models/user.model");

const router = express.Router();

router.post("/single", uploadSingle("profile_pic"), async (req, res) => {
  try {
    const user = await User.create({
      id: req.body.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_pic: req.file.path,
    });

    return res.send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/multiple", uploadMultiple("profile_pic"), async (req, res) => {
  try {
    const filePaths = req.files.map((file) => file.path);
    const user = await User.create({
      id: req.body.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_pic: filePaths,
    });

    return res.send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// /users
router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.send({ users });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/single", uploadSingle("profile_pic"), async (req, res) => {
  try {
    const gallerys = await gallery.create({
      
      picture: req.body.last_name,
      profile_pic: req.file.path,
    });

    return res.send(gallerys);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/multiple", uploadMultiple("profile_pic"), async (req, res) => {
  try {
    const filePaths = req.files.map((file) => file.path);
    const gallerys = await gallery.create({
     
      picture: req.body.last_name,
      profile_pic: filePaths,
    });

    return res.send(gallerys);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// /users
router.get("", async (req, res) => {
  try {
    const gaellerys = await gallery.find().lean().exec();

    return res.send({ gallerys });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


module.exports = router;
