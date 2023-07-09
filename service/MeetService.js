const { default: axios } = require("axios");
const { Meet } = require("../models");
const { dailyUrl, dailyApiKey } = require("../constants/daily");
const { v4: uuidv4 } = require("uuid");

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

module.exports = { addMeet, getMeetById };
