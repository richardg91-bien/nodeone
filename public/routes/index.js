const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html', {title: 'RICHARD GARCIA TEZARA'});
});

router.get('/contact', (req, res,) => {
    res.render('contact.html', { title: 'CONTACT'})
    
});

router.get('/about', (req, res,) => {
    res.render('about.html', {title: 'ABOUT'})
    
});

router.get('/skill', (req, res,) => {
    res.render('skill.html', {title: 'SKILL'})

});



module.exports = router;