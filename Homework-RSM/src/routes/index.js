const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'HomeWork' });
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page' });
});

router.get('/about', (req, res) => {
    res.render('about.html', { title: 'About' });
});



module.exports = router;