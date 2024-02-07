import mongoose from "mongoose";

const categroySchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    // unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

const Categroy = mongoose.model("Category", categroySchema);
export default Categroy;
