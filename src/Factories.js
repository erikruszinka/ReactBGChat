const uuidv = require("uuid/v4");

const createUser = ({ name = "" } = {}) => ({
  id: uuidv(),
  name
});

const getTime = date => {
  return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
};

const createMessage = ({ message = "", sender = "" } = {}) => ({
  id: uuidv(),
  time: getTime(new Date(Date.now())),
  message,
  sender
});

const createChat = ({
  messages = [],
  name = "Community",
  users = []
} = {}) => ({
  id: uuidv(),
  name,
  message,
  users,
  typingUsers: []
});

module.exports = {
  createMessage,
  createChat,
  createUser
};
