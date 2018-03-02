
const express = require('express');
const router = new express.Router();


const Testimonial = require('mongoose').model('Testimonial');


router.get('/testimonials/all', async (req, res) => {

    let testimonials = await Testimonial.find();

    return res.status(200).json({
        success: true,
        message: 'Recieved products.',
        testimonials: testimonials,
    })
})


router.delete('/testimonial/:id', async (req, res) => {
    let id = req.params.id;

    Testimonial.findByIdAndRemove(id).then(e => {
        
        return res.status(200).json({
            success: true,
            message: 'Testimonial deleted'
        })
    }).catch(e => {
        return res.status(404).json({
            success: false,
            message: 'Testimonial does not exist'
        })
    })
})

router.get('/testimonial/:id', async (req, res) => {
    let id = req.params.id;

    Testimonial.findById(id).then(tes => {
        return res.status(200).json({
            success: true,
            testimonial: tes
        })
    }).catch(e => {
        return res.status(404).json({
            success: false,
            message: 'Testimonial not found'
        })
    })
})



module.exports = router;