const express = require("express");
const createUser = require("./apis/create-user");
const createBulkUsers = require("./apis/create-bulk-users");
const getUsers = require("./apis/get-users");
const signIn = require("./apis/user-sign-in");
const signUp = require("./apis/user-sign-up");
const verifyOtp = require("./apis/verify-otp");
const userListPagination = require("./apis/get-all-users");
const getUserByPk = require("./apis/get-user-by-pk");
const deleteUser = require("./apis/delete-user");
const updateUser = require("./apis/update-user");
const patchUser = require("./apis/patch-user");
const router = express.Router();

router.post("/create-user", createUser);
router.post("/create-users", createBulkUsers);
router.get("/get-users", getUsers);
router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.post("/verify-otp", verifyOtp);
router.get("/user-list-pagination", userListPagination);
router.get("/get-user/:id", getUserByPk);
router.delete("/delete-user", deleteUser);
router.put("/update-user/:id", updateUser);
router.patch("/patch-user/:id", patchUser);

module.exports = router;
