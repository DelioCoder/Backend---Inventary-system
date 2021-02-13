const userCtrl = {};

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = require('../Config'); 

const User = require('../Models/User');

userCtrl.getUsers = async(req, res) =>{

    try {
        
        const users = await User.find();

        if(users){
            res.json(users);
        }else{
            res.json({message: 'There are not users yet'});
        }

    } catch (error) {
        res.json(error);
    }

}

userCtrl.getUser = async(req, res) =>{

    try {
        
        const user = await User.findById(req.params.id);

        if(user){
            res.json(user);
        }else{
            res.json({message: 'There are not users yet'});
        }

    } catch (error) {
        res.json(error);
    }

}

userCtrl.createUser = async(req, res) =>{

  

        const { name, lastname, email, cellphone, password, confirmPassword } = req.body;

        const user = await User.findOne({email});

        if(password == confirmPassword){

            if(!user){

                const newUser = new User();

                newUser.name = name;
                newUser.lastname = lastname;
                newUser.email = email;
                newUser.cellphone = cellphone;
                newUser.password = newUser.generateHash(password);

                await newUser.save();

                if(newUser){
                    res.json({message: 'New user has been created'});
                }

            }
            else{
                res.json({message: 'This email is already take'});
            }
        }else{
            res.json({message: 'The password and Confirm password doesnt coincide' });
        }

   

}

userCtrl.updateUser = async() =>{

    const { name, lastname, email, cellphone, password } = req.body;

    try {
        
        const user = await User.findById(req.params.id);

        if(user){

            const newUser = new User();

            newUser.name = name;
            newUser.lastname = lastname;
            newUser.email = email;
            newUser.cellphone = cellphone;
            newUser.password = newUser.encryptPassword(password);

            await newUser.save();

            if(newUser){
                res.json({message: 'The user has been updated'});
            }

        }

    } catch (error) {
        res.json(error);   
    }

}

userCtrl.deleteUser = async() =>{

    try {
        
        await User.findByIdAndDelete(req.params.id);

        res.json({message: 'User has been deleted succesful'});

    } catch (error) {
        res.json(error);   
    }

}

userCtrl.loginUser = async(req, res) =>{

    const { email, password } = req.body;

    try {
        
        const user = await User.findOne({email}, function(err, user){

            if(!user){
                return res.status(400).send({
                    ok:false,
                    err:{
                        message:'Invalid User'
                    }
                })
            }
    
            if(!bcrypt.compareSync(password,user.password)){
                return res.status(400).send({
                    ok:false,
                    err:{
                        message:'Wrong Password'
                    }
                })
            }

            let token = jwt.sign({
                usuariobd: user
            },'secret',{expiresIn:'8h'})
    
            res.send({
                ok:true,
                usuariobd: user,
                token
            })

        });

    } catch (error) {
        res.send(error);
    }

}

userCtrl.logUser = async(req, res) =>{

    try {
        
        await res.clearCookie("jwt");

        res.json({message: 'Logout successful'});

    } catch (error) {
        res.json(error);
    }

}

module.exports = userCtrl;