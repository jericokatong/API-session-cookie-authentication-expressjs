const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const session = require("express-session");

const saltRounds = 10;

module.exports.register = async (req, res) => {
  try {
    const result = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (result) {
      res.json({ msg: "Username exist" });
    } else {
      bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        if (err) {
          console.log(error);
        } else {
          await User.create({ username: req.body.username, password: hash });
          res.json({ msg: "berhasil registrasi" });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.login = async (req, res) => {
  try {
    const result = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (result) {
      bcrypt.compare(req.body.password, result.password, (err, response) => {
        if (err) {
          console.log(err);
        } else {
          if (response) {
            req.session.user = result;
            res.json({ msg: "Selamat berhasil login!!", data: req.session.user });
          } else {
            res.json({ msg: "Wrong combination password/username" });
          }
        }
      });
    } else {
      res.json({ msg: "username doesn't exist" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.getLogin = async (req, res) => {
  try {
    if (req.session.user) {
      res.json({ loggedIn: true, data: req.session.user });
    } else {
      res.json({ loggedIn: false, data: req.session.user });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.logout = async (req, res) => {
  try {
    req.session.user = null;
    // res.redirect("/");
    res.json({ msg: "berhasil logout", data: req.session.user });
  } catch (error) {
    console.log(error);
  }
};
