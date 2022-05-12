const User = require('../models/users');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.post('/', async(req, res, next) => {
    const user = await User.findOne({ where : {email : req.body.email }});
    if(user){
        if(req.body.password == user.password){
            console.log(`{id: ${user.id}, email: ${user.email}, role: ${user.role}}`);

            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    rol: user.role,
                },
                "jwtsecretkey123",
                {
                    expiresIn: "12h",
                }
            );
            
            const _user = {
                id: user.id,
                username: user.username,
                email: user.email,
                token
            }

            return (res.status(200).json(_user));
        } else {
        return res.status(400).json({ error : "Password Incorrect" });
        }
    
    }else{
        return res.status(404).json({ error : "User does not exist" });
    }
})

module.exports = router;


exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ where : {email : req.body.email }});
        if(user){
            if(req.body.password == user.password){
                console.log(`{id: ${user.id}, email: ${user.email}, role: ${user.role}}`);

                const token = jwt.sign(
                    {
                        id: 'Hola',
                    },
                )
                
                console.log(token);
                const _user = {
                    username: user.username,
                    token
                }
    
                return (res.status(200).json({message: "Holaputito"}));
            } else {
            return res.status(400).json({ error : "Password Incorrect" });
            }
        
        }else{
            return res.status(404).json({ error : "User does not exist" });
        }
    } catch (error) {
        return res.status(500).json({error: "Hubo un error interno"});
    }
   
    // try {
    //     if (!req.body.password){
    //         return ({
    //             status: 400,
    //             error: "password is required",
    //         });
    //     }
    
    //     let user = undefined;

    //     if(!req.body.email){
    //         return ({
    //             status: 400,
    //             error: "you have to send email",
    //         });
    //     }else{
    //         user = await User.findOne({where : {email: req.body.email}});
    //     }
      
    //     if(user){
    //         if(user.password == req.body.password){
                
    //             const token = jwt.sign(
    //                 {
    //                     id: user.id,
    //                     email: user.email,
    //                     rol: user.role,
    //                 }
    //             )
    
    //             const user = {
    //                 username: user.username,
    //                 token
    //             }
    
    //             return(res.status(200).json({user}));
    //         }else{
    //             return (res.status(400).json({error: "Incorrect password"}));
    //         }
    //     }else{
    //         return (res.status(404).json({error: "User not found"}));
    //     }
    // } catch (error) {
    //     return res.status(500).json({error: "Hubo un error interno"});
    // }
  

   
};