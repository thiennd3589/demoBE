const {
  addMeet,
  getMeetById,
  joinMeet,
  addMessage,
  addFile,
} = require("../service/MeetService");
const { getUser } = require("../service/UserService");

const createMeet = async (req, res) => {
  try {
    const data = { id: req.user.id, startTime: req.body.startTime };
    console.log("startTime", data);
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

const startJoinMeet = async (req, res) => {
  try {
    const { user_id, meet_id } = req.body;
    await joinMeet(meet_id, user_id);
    return res.status(200).json("ok");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const sendMessage = async (req, res) => {
  try {
    const { content, user_id, meet_id } = req.body;
    const message = await addMessage(content, user_id, meet_id);

    return res.status(200).json({ message });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const sendFile = async (req, res) => {
  try {
    const { user_id, meet_id } = req.body;
    const sentFile = req.file;
    const file = await addFile(sentFile.filename, user_id, meet_id);
    const user = await getUser(req.user.id);
    global.io
      .to(`meet_${meet_id}`)
      .emit("file", { url: sentFile.filename, meet_id, user_id, user });
    return res.status(200).json(file);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { createMeet, getMeet, startJoinMeet, sendMessage, sendFile };
