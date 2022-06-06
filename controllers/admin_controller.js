const User = require("../models/users");
const Review = require("../models/review");
module.exports.adminPage = async function (req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect("/users/login");
  } else {
    if (req.user.isAdmin == false) {
      console.log("You are not an admin");
      return res.redirect("/");
    } else {
      try {
        let user = await User.find({});
        var employeeList = [];
        for (let i = 0; i < user.length; i++) {
          var temp = {
            name: user[i].name,
            id: user[i].id,
          };
          employeeList.push(temp);
        }

        return res.render("admin", {
          title: "ERS | Admin page",
          employeeList: employeeList,
        });
      } catch (err) {
        console.log("Error while admin", err);
        return;
      }
    }
  }
};
