const Message = require('mongoose').model('Message');
const Notification = require('mongoose').model('Notification');
const Product = require('mongoose').model('Product');
const Review = require('mongoose').model('Review');
const Honey = require('mongoose').model('Honey');
const CompanyInfo = require('mongoose').model('CompanyInfo');

const Admin = require('mongoose').model('Admin');
const Subscription = require('mongoose').model('Subscription');
const Order = require('mongoose').model('Order');
const User = require('mongoose').model('User');
const Beekeeper = require('mongoose').model('Beekeeper');
const Buyer = require('mongoose').model('Buyer');
const Partner = require('mongoose').model('Partner');
const UserRole = require('mongoose').model('UserRole');
const PartnershipRequest = require('mongoose').model('PartnershipRequest');


module.exports = (server) => {
    let io = require('socket.io')(server);

    io.on('connection',async (socket) => {
        let reviews = await Review.find();
        socket.emit('reviews', reviews);

        let products = await Product.find();
        socket.emit('products', products);

        let honeys = await Honey.find();
        socket.emit('honeys', honeys);

        let companyInfo = await CompanyInfo.findOne();
        socket.emit('companyInfo', companyInfo);

        socket.on('userEmail', async (userEmail) => {
            socket['userEmail'] = userEmail;
            let messages = await Message.find({ recieverEmail: socket.userEmail })
            socket.emit('messages', messages)

            let nots = await Notification.find({ recieverEmail: socket.userEmail })
            socket.emit('notifications', nots);

           
            let admin = await Admin.findOne({ email: userEmail })
            if (admin) {

                let userRoles = await UserRole.find();
                socket.emit('admin-users-count', userRoles.length);

                let users = await User.find();
                socket.emit('admin-users', users);

                let beekeepers = await Beekeeper.find();
                socket.emit('admin-beekeepers', beekeepers);

                let buyers = await Buyer.find();
                socket.emit('admin-buyers', buyers);

                let partners = await Partner.find().populate('company');
                socket.emit('admin-partners', partners);

                let subs = await Subscription.find()
                socket.emit('admin-subscriptions', subs);

                let orders = await Order.find().populate('product')
                socket.emit('admin-orders', orders);    

                let partnRequests = await PartnershipRequest.find().populate('company');
                socket.emit('admin-partnership-requests', partnRequests);
            }
           
            socket.on('disconnect', () => {
                console.log(`Deleting socket: ${socket.id}`);
            });
        })

    });

    return io;
}