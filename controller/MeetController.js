const { addMeet, getMeetById } = require("../service/MeetService");

const createMeet = async (req, res) => {
  try {
    const data = { id: req.user.id, startTime: req.body.startTime };
    const meet = await addMeet(data);
    return res.status(201).json(meet);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getMeet = async (req, res) => {
  try {
    const meet = await getMeetById(req.params.id);
    return res.status(200).json(meet);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { createMeet, getMeet };
