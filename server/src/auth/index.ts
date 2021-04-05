const localStrategy = require("passport-local").Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

export const secretOrKey = 'TOP_SECRET'

export default (passport) => {
  passport.use(
    "signup",
    new localStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          // TODO no time :(
          // const user = await UserModel.create({ username, password });
          const user = { email, password };
  
          return done(null, user);
        } catch (error) {
          console.log('error', error)
          done(error);
        }
      }
    )
  );

  passport.use(
    'login',
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
          // TODO no time :(
          // const user = await UserModel.findOne({ email });
  
          // if (!user) {
          //   return done(null, false, { message: 'User not found' });
          // }
  
          // const validate = await user.isValidPassword(password);
  
          // if (!validate) {
          //   return done(null, false, { message: 'Wrong Password' });
          // }

          const user = {_id: 1, email, password }
  
          return done(null, {}, { message: 'Logged in Successfully' });
        } catch (error) {
          return done(error);
        }
      }
    )
  );
  
  passport.use(
    new JWTstrategy(
      {
        secretOrKey,
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
      },
      async (token, done) => {
        try {
          return done(null, token.user);
        } catch (error) {
          done(error);
        }
      }
    )
  );
}
