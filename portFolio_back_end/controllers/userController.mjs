import * as User from '../models/userModel.mjs';

// login user.
const loginUser = async (req, res) => {
    res.json({message: 'logged in user'});
}

// signup user.
const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signUp(email, password);

        res.status(200).json({email, user});
    } catch (error) {
       res.status(400).json({error: error.message});
    }
}

export { loginUser, signupUser }