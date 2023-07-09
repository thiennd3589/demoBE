const bcrypt = require("bcrypt");
const { User } = require("../models");
const errorCode = require("../constants/errorCode");

const addUser = async ({ lastName, firstName, email, password }) => {
  try {
    const existUser = await User.findOne({ where: { email } });
    if (existUser) {
      throw Error(errorCode.EMAIL_EXISTED);
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      lastName,
      firstName,
      email,
      password: hashPassword,
    });
    return user.toJSON();
  } catch (error) {
    throw error;
  }
};

const getUser = async (id) => {
  try {
    const user = await User.findOne({ where: { id } });

    if (!!!user) {
      throw Error("USER_NOT_EXIST");
    }

    return user.toJSON();
  } catch (error) {
    throw error;
  }
};

module.exports = { addUser, getUser };
