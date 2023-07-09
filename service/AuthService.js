const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const errorCode = require("../constants/errorCode");

const generateLoginToken = async ({ email, password }) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!!!user) {
      throw Error("USER_NOT_EXIST");
    }

    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (!!!isPasswordMatch) {
      throw Error(errorCode.WRONG_PASSWORD);
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      "FINDMEET_TOKEN"
    );

    return token;
  } catch (error) {
    throw error;
  }
};

module.exports = { generateLoginToken };
