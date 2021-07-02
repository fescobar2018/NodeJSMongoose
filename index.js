const express = require('express');
const engine =  require('ejs-mate');
const path = require('path');
const morgan = require('morgan'); 
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

//requiero mi conexion 
require('./src/database');
require('./src/passport/local-auht');

const app = express();


//configuraciones

app.set('port', process.env.PORT || 3000);
 app.use(express.static(path.join(__dirname, 'src')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs') 

//routes

app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next)=>{ app.locals.signupMessage = req.flash('signupMessage'); 
                            next();    
});


//app.use('/', require('./src/routes/routes'));


//Rouetes
app.get('/', async (req, res) => {  
    res.render('index')
  })



// ruta de ingreso de Usuario
app.get('/singup', async (req, res) => {  
    res.render('singup')
  })

app.post('/singup', passport.authenticate('local-singup', {
    successRedirect: '/profile',
    failureRedirect: '/singup',
    passReqToCallback: true
}));

//login 
app.get('/singnin', async (req, res) => {  
    res.render('singnin')
  })


app.post('/singnin', passport.authenticate('local-singnin', {
    successRedirect: '/profile',
    failureRedirect: '/singnin',
    passReqToCallback: true
}));





//siguiente ruta
app.get('/profile', async (req, res) => {  
    res.render('profile')

  })





app.listen(app.get('port'), () => {
    console.log('Servidor iniciado'); 
    
} )