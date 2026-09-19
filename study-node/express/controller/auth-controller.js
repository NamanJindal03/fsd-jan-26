import User from "../model/user.js";
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken'

export const signup = async(req, res) => {
    try{
        const password = await bcrypt.hash(req.body.password, 10)
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: password
        })
        const JWTToken = await JWT.sign({email: req.body.email, password: req.body.password}, 'namanjindal')
        console.log(JWTToken)

        res.json({message: 'user created successfully', token: JWTToken})
    }
    catch(err){
        res.json({message: 'try later'})
    }
}

export const login = async(req, res) => {
    console.log('1')
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(404).json({message: 'User or password incorrect'});
        if(!(await bcrypt.compare(req.body.password, user.password))){
            return res.status(404).json({message: 'User or password incorrect'})
        }
        const JWTToken = await JWT.sign({email: req.body.email, password: req.body.password}, 'namanjindal')
        console.log(JWTToken)
        return res.json({user, token: JWTToken})
    }
    catch(err){
        res.status(500).json({message: 'internal server error'})
    }
}

export const randomData = async(req, res) => {
    console.log(Math.random())
    try{    
        console.log("coming here?");
        res.json({message: Math.random()})
    }
    catch(err){
        
    }
}