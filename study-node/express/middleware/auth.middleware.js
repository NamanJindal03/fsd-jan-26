import JWT from 'jsonwebtoken'
import express from 'express'

export const JWTCheck = async(req, res, next) => {
    if(req.headers?.authorization?.split(' ')[1]){
        console.log(req.headers?.authorization?.split(' ')[1]);
        const token = req.headers?.authorization?.split(' ')[1];
        const decode = await JWT.verify(token, 'namanjindal');
        console.log(decode)
    }
    else{
        res.status(403).json({message: 'user not authorized'})
    }
    next();
}