const errorCode = require("../constants/errorCode");
const { generateLoginToken } = require("../service/AuthService");
const UserService = require("../service/UserService");

const register = async (req, res) => {
  try {
    const { lastName, firstName, email, password } = req.body;
    const user = await UserService.addUser({
      lastName,
      firstName,
      email,
      password,
    });
    return res.status(201).json({ data: user });
  } catch (error) {
    console.log(error);
    if (error.message === errorCode.EMAIL_EXISTED) {
      return res.status(400).json({ data: error.message });
    }

    return res.status(500).json(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await generateLoginToken({ email, password });
    return res.json({ data: { token } });
  } catch (error) {
    switch (error.message) {
      case errorCode.USER_NOT_EXIST:
        return res.status(400).json(error.message);
      case errorCode.WRONG_PASSWORD:
        return res.status(400).json(error.message);
      default:
        return res.status(500).json(error.message);
    }
  }
};

module.exports = { register, login };
