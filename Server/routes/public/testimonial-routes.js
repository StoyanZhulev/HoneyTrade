
const express = require('express');
const router = new express.Router();


const Testimonial = require('mongoose').model('Testimonial');


router.get('/testimonials', async (req, res) => {

    let testimonial = await Testimonial.find();

    return res.status(200).json({
        success: true,
        message: 'Recieved products.',
        testimonials: testimonials,
    })
})

router.post('/testimonial/create', async (req, res) => {


    let isValid = true;
    let errors = {};

    let reqTestimonial = req.body.testimonial;

    if (!reqTestimonial || typeof reqTestimonial.author !== 'string' || reqTestimonial.author.trim().length <= 1) {
        isValid = false;
        errors.name = 'Testimonial  must have author.';
    }

    if (!reqTestimonial || typeof reqTestimonial.text !== 'string' || reqTestimonial.text.trim().length <= 1) {
        isValid = false;
        errors.honeyType = 'Testimonial text must be longer';
    }



    if (!isValid) {
        return res.status(400).json({
            success: false,
            errors: errors
        })
    }

    let date = new Date();
    let testimonial = await Testimonial.create({
        author: reqTestimonial.author,
        text: reqTestimonial.text,
        date: date
    });

    let testimonaials = await Testimonial.find();
    const io = require('../../index');

    for (let socketId in io.sockets.sockets) {
        io.sockets.sockets[socketId].emit('testimonaials', testimonaials);
    }

    return res.status(200).json({
        success: true,
        message: 'Added testimonaials.',
        testimonaials: testimonaials,
    })
})

module.exports = router;