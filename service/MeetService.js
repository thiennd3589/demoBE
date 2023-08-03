const { default: axios } = require("axios");
const { Meet, UserMeet } = require("../models");
const { dailyUrl, dailyApiKey } = require("../constants/daily");
const { v4: uuidv4 } = require("uuid");

const TYPE = { MESSAGE: "message", FILE: "file" };

const addMeet = async (data) => {
  const { id: userId, startTime } = data;
  const body = {
    name: `${uuidv4().split("-")[0]}`,
    privacy: "public",
    properties: {},
  };
  try {
    const roomResponse = await axios.post(`${dailyUrl}/rooms`, body, {
      headers: { Authorization: `Bearer ${dailyApiKey}` },
    });

    const meet = await Meet.create({
      owner_id: userId,
      startTime: startTime ?? new Date(),
      url: roomResponse.data.url,
    });
    return meet.toJSON();
  } catch (error) {
    throw error;
  }
};

const getMeetById = async (id) => {
  try {
    const meet = await Meet.findOne({ where: { id } });
    return meet.toJSON();
  } catch (error) {
    throw error;
  }
};

const joinMeet = async (meet_id, user_id) => {
  try {
    const exist = await UserMeet.findOne({ where: { meet_id, user_id } });
    if (!!!exist) {
      const meet = await getMeetById(meet_id);
      if (!meet) {
        throw Error("MEET_DOES_NOT_EXIST");
      }
      await UserMeet.create({ user_id, meet_id });
    }
  } catch (error) {
    throw error;
  }
};

const addMessage = async (content, user_id, meet_id) => {
  try {
    const message = await UserMeet.create({
      user_id,
      meet_id,
      content,
      type: TYPE.MESSAGE,
    });
    return message.toJSON();
  } catch (error) {
    throw error;
  }
};

const addFile = async (url, user_id, meet_id) => {
  try {
    const file = await UserMeet.create({
      user_id,
      meet_id,
      url,
      type: TYPE.FILE,
    });
    return file.toJSON();
  } catch (error) {
    throw error;
  }
};

module.exports = { addMeet, getMeetById, joinMeet, addMessage, addFile };
