const User = require("../model/User");

// all data show
const all_user_details = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
};

// single data show
const singel_user_details = async (req, res) => {
  try {
    const users = await User.findById(req.params.userId);
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
};

// add new user
const singel_user_add = async (req, res) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    country: req.body.country,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

//update user
const single_user_update = async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      country: req.body.country,
    };

    const updateUser = await User.findByIdAndUpdate(
      { _id: req.params.userId },
      user
    );
    res.json(updateUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// delete user
const single_user_delete = async (req, res) => {
  try {
    const removUser = await User.findByIdAndDelete(req.params.userId);
    res.json(removUser);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  all_user_details,
  singel_user_details,
  singel_user_add,
  single_user_update,
  single_user_delete,
};
