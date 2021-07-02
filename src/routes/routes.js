const express = require('express');
const router = express.Router();


//pagina de inicio
router.get( '/', (res, req, next) => {

     res.render('index')   


} );


router.get( '/sigup', (res, req, next) => {

     res.render('sigup');

} );

router.post( '/', (res, req, next) => {



} );


router.get( '/signin', (res, req, next) => {



} );

router.post( '/signin', (res, req, next) => {



} );




module.exports = router();
