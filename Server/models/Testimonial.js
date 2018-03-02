const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.String, required: true },
    text: { type: mongoose.Schema.Types.String, required: true },
    date: { type: mongoose.Schema.Types.Date, required: true },    
});


const Testimonial = mongoose.model('Testimonial', testimonialSchema);



module.exports = Testimonial;
