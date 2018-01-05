const Message = require('mongoose').model('Message');
const Notification = require('mongoose').model('Notification');
const Admin = require('mongoose').model('Admin');
const Subscription = require('mongoose').model('Subscription');
const Order = require('mongoose').model('Order');



module.exports = (server) => {
    let io = require('socket.io')(server);

    io.on('connection', (socket) => {

        socket.on('userEmail', async (userEmail) => {
            socket['userEmail'] = userEmail;
            let messages = await Message.find({ recieverEmail: socket.userEmail })
            socket.emit('messages', messages)

            let nots = await Notification.find({ recieverEmail: socket.userEmail })
            socket.emit('notifications', nots);



            let admin = await Admin.findOne({ email: userEmail })
            if (admin) {
                let subs = await Subscription.find()
                socket.emit('admin-subscriptions', subs);

                let orders = await Order.find().populate('product')
                socket.emit('orders', orders);    

            }
           
            socket.on('disconnect', () => {
                console.log(`Deleting socket: ${socket.id}`);
            });
        })

    });

    return io;
}