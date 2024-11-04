import {User} from '../models/userModel.js';
import {hashPassword,comparePassword} from '../helpers/auth.js';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
export const test =  (req, res, next) => {
    res.send('Hello from test');
};
// get profile endpoint
export const getProfile = (req,res) => {
    const token = req.cookies
    if (token) {
        jwt.verify(token,process.env.JWT_SECRET,{},(error,user) => {
            if (error) throw error;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}
// login endpoint
export const loginUser = async(req,res) => {
    try{
        const {email,password} = req.body;
        //check if user exists
        const user = await User.findOne({email})

        if (!user) {
            return res.json({
                error:'No user found'
            })
        }
        //Check if password match
        const match = await comparePassword(password,user.password);
        if (match) {
            jwt.sign({email:user.email, id:user._id, name:user.name},process.env.JWT_SECRET,{},(err,token)=>{
                if (err) throw err;
                res.cookie('token',token).json(user)
            })

        }
        if (!match) {
            return res.json({ error: 'Invalid password' });
        }

    } catch(error) {
        console.log(error)
    }
}
// signUp endpoint
export const signUpUser = async (req,res) => {
    try {
        const {name,email,password} = req.body
        //check if name was entered
        if (!name) {
            return res.json({
                error:'name is required'
            })
        }
        //Check password is good
        if (!password || password.length < 6) {
            return res.json({
                error:'Password is required and should be at least 6 character long'
            })
        }
        //check email
        const exist = await User.findOne({email})
        if (exist) {
            return res.json({
                error:'Email is taken already'
            })
        }
        const passwordHash = await hashPassword(password)
        const user = await User.create({
            name,
            email,
            password:passwordHash,
        })
        return res.json(user)
    } catch(error) {
        console.log(error)
    }

}