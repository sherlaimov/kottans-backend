function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(subUser => goodUsers.some(user => subUser.id === user.id));
  };
}

module.exports = checkUsersValid;
