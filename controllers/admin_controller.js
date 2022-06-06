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

// set review for employee
module.exports.setReviewrs = async function (req, res) {
  try {
    if (!req.isAuthenticated()) {
      return res.redirect("/users/login");
    } else {
      let employee = await User.findById(req.user.id);

      if (employee.isAdmin == false) {
        console.log("You are not an admin");
        return res.redirect("/");
      } else if (req.body.Reviewer == req.body.Recipient) {
        return res.redirect("back");
      } else {
        let reviewer = await User.findById(req.body.Reviewer);

        // if reviewer not found
        if (!reviewer) {
          return res.redirect("back");
        }

        let recipient = await User.findById(req.body.Recipient);

        if (!recipient) {
          return res.redirect("back");
        }

        reviewer.to.push(recipient);
        reviewer.save();

        recipient.from.push(reviewer);
        recipient.save();

        return res.redirect("back");
      }
    }
  } catch (err) {
    console.log("Error", err);
    return;
  }
};
