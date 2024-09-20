const { User } = require("../models/user");

exports.addUser = async (req, res) => {
  console.log("adding new user", req.body);
  const { name, age } = req.body;

  if (name.length === 0) {
    return res.send("Got empty name");
  }

  try {
    const user = new User({ name, age });
    await user.save();
    return res.send("New user added");
  } catch (err) {
    console.log(err);
    return res.send("Sorry! couldn't save the user, try again!");
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    if (users.length === 0) {
      return res.send("No user");
    }

    return res.send(users);
  } catch (e) {
    console.log(e);
    return res.send("Got error fetching");
  }
};
