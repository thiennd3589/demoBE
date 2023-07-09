const { getUser } = require("../service/UserService");

const getUserById = async (req, res) => {
  try {
    const user = await getUser(parseInt(req.params.id));
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getUserProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await getUser(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { getUserById, getUserProfile };
