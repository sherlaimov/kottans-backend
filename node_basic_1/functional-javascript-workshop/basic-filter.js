const getShortMessages = arr => arr.filter(o => o.message.length < 50).map(o => o.message);

module.exports = getShortMessages;
