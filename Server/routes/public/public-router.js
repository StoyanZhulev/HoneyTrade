const authRoutes = require('./auth-routes');
const compInfoRoutes = require('./companyInformation-routes');
const productRoutes = require('./product-routes');
const partnersRoutes = require('./partners-routes');
const testimonialRoutes = require('./testimonial-routes');



const publicRoutes = [
    authRoutes,
    compInfoRoutes,
    productRoutes,
    partnersRoutes,
    testimonialRoutes
];

module.exports = publicRoutes;