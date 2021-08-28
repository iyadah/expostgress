const express = require("express");
const router = express.Router();

const User = require("../../models/auth_user");

// @route    GET api/test
// @desc     Get all comments
// @access   Public
router.get("/", async (req, res) => {
  try {
    const getUsers = (request, response) => {
      console.log("query");

      User.query(
        "SELECT * FROM auth_user ORDER BY id asc limit 10",
        (error, results) => {
          if (error) {
            throw error;
          }
          console.log(results.rows);
        }
      );
    };
    getUsers();

    return res.status(200).json({ msg: "Get works" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
