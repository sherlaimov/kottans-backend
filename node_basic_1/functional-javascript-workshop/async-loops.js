function loadUsers(userIds, load, done) {
  const users = [];
  for (let i = 0; i < userIds.length; i++) {
    load(userIds[i], response => {
      users.push(response);
    });
  }
  done(users);
}

module.exports = loadUsers;
