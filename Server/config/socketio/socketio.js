const Message = require('mongoose').model('Message');
const Notification = require('mongoose').model('Notification');
const Product = require('mongoose').model('Product');
const Testimonial = require('mongoose').model('Testimonial');
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

    io.on('connection', async (socket) => {
        
    console.log(Object.keys(io.sockets.sockets).length)
    console.log('socket connected ' + socket.id)


    socket.on('getCurrentUserInfo', async (email) => {
        let user = await getUser(email);
        socket.emit('currentUser', user)
    })

        let testimonials = await Testimonial.find();
        socket.emit('testimonials', testimonials);

        let products = await Product.find();
        socket.emit('products', products);

        let honeys = await Honey.find();
        socket.emit('honeys', honeys);

        let companyInfo = await CompanyInfo.findOne();
        socket.emit('companyInfo', companyInfo);

        let partners = await Partner.find({}).populate('company', '_id companyName companyLocation companyInformation email logoUmageUrl').populate('orders');
        socket.emit('partners', partners)

        socket.on('userEmail', async (userEmail) => {
            socket['userEmail'] = userEmail;
            let messages = await Message.find({ recieverEmail: socket.userEmail })
            socket.emit('messages', messages)

            let nots = await Notification.find({ recieverEmail: socket.userEmail })
            socket.emit('notifications', nots);


            let subscr = await Subscription.find({ subscriberEmail: socket.userEmail })
            socket.emit('subscriptions', subscr);

            let admin = await Admin.findOne({ email: userEmail })
            if (admin) {
                socket.on('getAdminState', async () => {
                    let userRoles = await UserRole.find();
                    socket.emit('admin-users-count', userRoles.length);
    
                    let users = await User.find();
                    socket.emit('admin-users', users);
    
                    let beekeepers = await Beekeeper.find();
                    socket.emit('admin-beekeepers', beekeepers);
    
                    let buyers = await Buyer.find();
                    socket.emit('admin-buyers', buyers);
    
                    // let partners = await Partner.find().populate('company');
                    // socket.emit('admin-partners', partners);
    
                    let subs = await Subscription.find()
                    socket.emit('admin-subscriptions', subs);
    
                    let orders = await Order.find().populate('product')
                    socket.emit('admin-orders', orders);
    
                    let partnRequests = await PartnershipRequest.find().populate('company');
                    socket.emit('admin-partnership-requests', partnRequests);
                })
                // let userRoles = await UserRole.find();
                // socket.emit('admin-users-count', userRoles.length);

                // let users = await User.find();
                // socket.emit('admin-users', users);

                // let beekeepers = await Beekeeper.find();
                // socket.emit('admin-beekeepers', beekeepers);

                // let buyers = await Buyer.find();
                // socket.emit('admin-buyers', buyers);

                // // let partners = await Partner.find().populate('company');
                // // socket.emit('admin-partners', partners);

                // let subs = await Subscription.find()
                // socket.emit('admin-subscriptions', subs);

                // let orders = await Order.find().populate('product')
                // socket.emit('admin-orders', orders);

                // let partnRequests = await PartnershipRequest.find().populate('company');
                // socket.emit('admin-partnership-requests', partnRequests);
            }

            socket.on('disconnect', () => {

                console.log(`Deleting socket: ${socket.id}`);
                let i = delete io.sockets.sockets[socket.id]
            });

            
        })

    });

    return io;
}

async function getUser(email){
    let user = await UserRole.findOne({ email: email });

    let ispartner = false;
   

    switch (user.role) {
      case 'user':
        userData = await User.findOne({ email: user.email });
        userToReturn = {
          'id': userData._id,
          'firstName': userData.firstName,
          'lastName': userData.lastName,
          'email': userData.email,
          'dateRegistered': userData.dateRegistered,          
          'role': 'user'
        }
        break;
      case 'beekeeper':
        userData = await Beekeeper.findOne({ email: user.email });
     
        userToReturn = {
          'id': userData._id,
          'companyName': userData.companyName,
          'firstName': userData.firstName,
          'lastName': userData.lastName,
          'location': userData.location,
          'email': userData.email,
          'dateRegistered': userData.dateRegistered,
          'role': 'beekeeper'
        }
        break;
      case 'buyer':
        userData = await Buyer.findOne({ email: user.email });
        ispartner = await Partner.findOne({ companyEmail: user.email }).populate('orders');
        userToReturn = {
          'id': userData._id,
          'companyName': userData.companyName,
          'companyInformation': userData.companyInformation,
          'companyLocation': userData.companyLocation,
          'email': userData.email,
          'logo': userData.logoImageUrl,
          'dateRegistered': userData.dateRegistered,          
        }

        if (ispartner) {
          userToReturn['role'] = 'partner'
          userToReturn['orders'] = ispartner.orders;
        } else {
          userToReturn['role'] = 'buyer'
        }
        break;
      case 'admin':
        userData = await Admin.findOne({ email: user.email });
        userToReturn = {
          'id': userData._id,
          'companyName': userData.companyName,
          'companyInformation': userData.companyInformation,
          'companyLocation': userData.companyLocation,
          'email': userData.email,
          'role': 'admin'
        }
        break;
      default:
        break;
    }

    return userToReturn;
}