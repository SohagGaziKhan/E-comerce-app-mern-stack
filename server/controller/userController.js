import User from "../model/userMode.js";

// get all users
export const getAllUserController = async (req, res) => {
  try {
    // const user = req.body;

    const users = await User.find({});
    res.status(200).send({
      success: true,
      totalUser: users.length,
      message: "All User List",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get All User",
      error,
    });
  }
};
// get singel user
export const getSingleUserController = async (req, res) => {
  try {
    // const user
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Single User",
      error,
    });
  }
};
// update user as admin or user
export const updateUserController = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
// delete user
export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "User Deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
