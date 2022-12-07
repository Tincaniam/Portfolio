import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

// Prepare to the database running on Mongodb cloud.
const usersDB = mongoose.createConnection(
    process.env.MONGODB_USERS_CONNECT_STRING,
);

// The open event is called when the connection is succsesfully opened.
usersDB.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose for users!");
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
   email: {
    type: String,
    required: true,
    unique: true
   },
   password: {
    type: String,
    required: true
   }
});

// Mongoose Model that creates the Javascript class User.
const User = mongoose.model("User", userSchema);

// signUp function.
const signUp = async (email, password) => {
    mongoose.connect(process.env.MONGODB_USERS_CONNECT_STRING);

    // Hash and salt user passwords before adding to db.
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await new User({email: email, password: hash});
    return user.save();
}

export { signUp }