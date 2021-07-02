const passport = require('passport')
const localStrategy = require('passport-local').Strategy

//const User = require('./models/user');
const User = require('../models/user')

passport.serializeUser((user, done) => {
    done(null, user.id);
} );


passport.deserializeUser( async (id, done) => {
    const user = await User.findById(id);
    done(null, user);

} );




passport.use('local-singup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async ( req, email,password, done )=>{ 

    const user =  await User.findOne({email: email});

    if(user){
        return done(null, false, req.flash('signupMessage', 'El Email ya existe'));

    }else {
        const NewUser = new User();
        NewUser.email = email;
        NewUser.password =  password;
        await NewUser.save();
        done(null, NewUser);
        
    }

   
        

 }));

 //hacer login a la base de datos

 passport.use('local-singnin', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
 }, async (req, email, password) => {

    const user = await User.findOne({email: email});

    if(!user){
        return done(null, false, req.flash('signinMessage', 'Usuario no encontrado'));
    }
    
    if(!user.comparePassword(password)){
        return done(null, false, req.flash('signinMessage', 'Contraseña incorrecta'));
    }

    done(null, user);


 }));