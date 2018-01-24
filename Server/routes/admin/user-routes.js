const express = require('express')

const router = new express.Router()
const User = require('mongoose').model('User');
const Beekeeper = require('mongoose').model('Beekeeper');
const Buyer = require('mongoose').model('Buyer');
const Partner = require('mongoose').model('Partner');
const UserRole = require('mongoose').model('UserRole');

const Subscription = require('mongoose').model('Subscription');



const authCheck = require('../../middleware/auth-check');


router.get('/users/all', async (req, res) => {
    let users = await User.find();
    let beekeepers = await Beekeeper.find();
    let buyers = await Buyer.find();
    let partners = await Partner.find().populate('company').populate('orders');

    let usersData = {
        users,
        beekeepers,
        buyers,
        partners
    }

    return res.status(200).json({
        success: true,
        message: 'Recieved users',
        users: usersData
    })
})

router.get('/user/:email', async (req, res) => {
    let email = req.params.email;

    let userRole = await UserRole.findOne({ email: email });

    if (!userRole) {
        return res.status(404).json({
            success: false,
            message: 'User does not exist.'
        });
    }

    let role = userRole.role;

    let userToReturn;
    let userData = await User.findOne({ email: email });
    userToReturn = {
        'id': userData._id,
        'firstName': userData.firstName,
        'lastName': userData.lastName,
        'email': userData.email
    }


    if (!userToReturn) {
        return res.status(404).json({
            success: false,
            message: 'Was not able to get user details'
        });
    }

    return res.status(200).json({
        success: true,
        message: 'Recieved user data',
        userData: userToReturn
    })
})

router.get('/beekeeper/:email', async (req, res) => {
    let email = req.params.email;

    let userRole = await UserRole.findOne({ email: email });

    if (!userRole) {
        return res.status(404).json({
            success: false,
            message: 'User does not exist.'
        });
    }

    let role = userRole.role;

    let userToReturn;
    let userData = await Beekeeper.findOne({ email: email });
    userToReturn = {
        'id': userData._id,
        'companyName': userData.companyName,
        'firstName': userData.firstName,
        'lastName': userData.lastName,
        'location': userData.location,
        'email': userData.email
    }



    if (!userToReturn) {
        return res.status(404).json({
            success: false,
            message: 'Was not able to get user details'
        });
    }

    return res.status(200).json({
        success: true,
        message: 'Recieved user data',
        userData: userToReturn
    })
})

router.get('/buyer/:email', async (req, res) => {
    let email = req.params.email;

    let userRole = await UserRole.findOne({ email: email });

    if (!userRole) {
        return res.status(404).json({
            success: false,
            message: 'User does not exist.'
        });
    }

    let role = userRole.role;

    let userToReturn;
    let userData = await Buyer.findOne({ email: email });
    userToReturn = {
        'id': userData._id,
        'companyName': userData.companyName,
        'companyInformation': userData.companyInformation,
        'companyLocation': userData.companyLocation,
        'email': userData.email,
        'logoImageUrl': userData.logoImageUrl,
        'dateRegistered': userData.dateRegistered
    }


    if (!userToReturn) {
        return res.status(404).json({
            success: false,
            message: 'Was not able to get user details'
        });
    }

    return res.status(200).json({
        success: true,
        message: 'Recieved user data',
        userData: userToReturn
    })
})
router.get('/partner/:email', async (req, res) => {
    let email = req.params.email;

    let userRole = await UserRole.findOne({ email: email });
 
    if (!userRole) {
        return res.status(404).json({
            success: false,
            message: 'User does not exist.'
        });
    }

    let role = userRole.role;

    let userData = await Partner.findOne({ companyEmail: email })
    .populate({
      path: 'orders',
      model: 'Order',
      populate: {
        path: 'product',
        model: 'Product'
      }
    }).populate('company');
           
    console.log(userData);
    if(!userData){
        return res.status(404).json({
            success: false,
            message: 'Was not able to get user details'
        });
    }

    return res.status(200).json({
        success: true,
        message: 'Recieved user data',
        userData: userData
    })
})

router.get('/user/:email/subscriptions', async (req, res) => {
    let email = req.params.email;

    let userRole = await UserRole.findOne({ email: email });

    if (!userRole) {
        return res.status(404).json({
            success: false,
            message: 'User does not exist.'
        });
    }

    let subs = await Subscription.find({ subscriberEmail: email })


    return res.status(200).json({
        success: true,
        message: 'Recieved user data',
        subscriptions: subs
    })
})

module.exports = router
