const User = require('../model/createdb');

exports.addhuman = (req, res) => {
    // create a new user
    const {
        Name,
        DOB,
        Age,
        Address,
        State,
        Pincode

    } = req.body;

    // create a new Object of User model class
    const userObj = new User(
        {
            Name:  Name,
            DOB: DOB,
            Age: Age,
            Address:  Address,
            State: State,
            Pincode: Pincode

            
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




exports.gethuman = (req, res) => {
    User.find().then(result =>{
        res.status(200).json({
            message : "we got the output",
            locations :result
        });
    }).catch(err=>{
        res.status(500).json({
            message : "we got wrong",
            error :err
        });

    })
 }












