"use strict";

const User = use("App/Models/User");

class UserController {
  async index({ response }) {
    const user = await User.all();
    console.log(User.all());
    return response.status(200).json(user);
  }
}

module.exports = UserController;
