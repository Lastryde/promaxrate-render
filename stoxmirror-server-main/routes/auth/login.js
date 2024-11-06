var express = require("express");
var { compareHashedPassword } = require("../../utils");
const UsersDatabase = require("../../models/User");
var router = express.Router();




router.post("/login", async function (request, response) {
  const { email, password } = request.body;
  /**
   * step1: check if a user exists with that email
   * step2: check if the password to the email is correct
   * step3: if it is correct, return some data
   */

  // step1
  const user = await UsersDatabase.findOne({ email: email });

  if (user) {
    // step2
    const passwordIsCorrect = compareHashedPassword(user.password, password);

    if (passwordIsCorrect) {
      response.status(200).json({ code: "Ok", data: user });
    } else {
      response.status(502).json({ code: "invalid credentials" });
    }
  } else {
    response.status(404).json({ code: "no user found" });
  }
});

router.post("/loginadmin", async function (request, response) {
  const { email} = request.body;
  /**
   * step1: check if a user exists with that email
   * step2: check if the password to the email is correct
   * step3: if it is correct, return some data
   */

  // step1
  const user = await UsersDatabase.findOne({ email: email });

  if (user) {
    // step2
   
      response.status(200).json({ code: "Ok", data: user });
   
}});



module.exports = router;
