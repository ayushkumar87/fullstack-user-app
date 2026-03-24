const User = require("../models/User");

exports.getUsers = async (req, res) => {

    const { city, rating } = req.query;

    let filter = {};

    if (city) {
        filter.city = { $regex: city, $options: "i" };
    }

    if (rating) {
        filter.rating = Number(rating);
    }

    const users = await User.find(filter);

    res.json(users);
};