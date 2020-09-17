function makeUsersArray() {
  return [
    {
      id: 1,
      date_created: "2029-01-22T16:28:32.615Z",
      fullname: "Sam Gamgee",
      username: "sam.gamgee@shire.com",
      password: "secret",
      nickname: "Sam",
    },
    {
      id: 2,
      date_created: "2100-05-22T16:28:32.615Z",
      fullname: "Peregrin Took",
      username: "peregrin.took@shire.com",
      password: "secret",
      nickname: "Pippin",
    },
    {
      id: 3,
      date_created: "2029-01-22T16:28:32.615Z",
      fullname: "Frodo Baggins",
      username: "Frodo.Baggins@shire.com",
      password: "secret",
      nickname: "Frodo",
    },
    {
      id: 4,
      date_created: "2100-05-22T16:28:32.615Z",
      fullname: "Gandalf the Gray",
      username: "Gandalf.gray@shire.com",
      password: "secret",
      nickname: "Gandalf",
    },
  ];
}

module.exports = {
  makeUsersArray,
};
