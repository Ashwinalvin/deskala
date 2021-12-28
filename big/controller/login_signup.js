const login_signupdb = require('../model/login_signupdb');

exports.signup = (req, res) => {
    // create a new user
    const {
        Email_id ,
        Password,
        Phone_Number
    } = req.body;

    // create a new Object of User model class
    const userObj = new login_signupdb(
        {
            Email_id : Email_id,
            Password: Password,
            Phone_Number :Phone_Number
            
        }
    )

    // We will call a save method on this object
    userObj.save().then(result => {
        res.status(200).json({
            message: "User Registered Successfully !",
            user: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
    });
}

exports.login = (req, res) => {
    // verify and login the user
    const {
        username,
        password,
        number
    } = req.body;

    login_signupdb.find({
        Email_id: username,
        Password: password,
        Phone_Number:number

    }).then(result => {
        if (result.length > 0) {
            res.status(200).json({
                message: "User Loggedin Successfully !!",
                user: result[0],
                isLoggedIn: true
            });
        } else {
            res.status(400).json({
                message: "Username or password is wrong !!",
                isLoggedIn: false
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
    });
}











