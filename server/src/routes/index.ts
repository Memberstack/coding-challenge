const jwt = require('jsonwebtoken');
const mockDb= require('../../mockdb.json')
const { secretOrKey } = require('../auth')

export default ( express, passport, stripe) => {  
  const router = express.Router();

  router.post(
    '/signup',
    passport.authenticate('signup', { session: false }),
    async (req, res, next) => {
      passport.authenticate(
        'login',
        async (err, user) => {
          try {
            if (err || !user) {
              const error = new Error('An error occurred.');
              return next(error);
            }
  
            req.login(
              user,
              { session: false },
              async (error) => {
                if (error) return next(error);

                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, secretOrKey);
  
                return res.json({ token });
              }
            );
          } catch (error) {
            return next(error);
          }
        }
      )(req, res, next);
  }
  );

  router.get(
    '/plans',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
      res.json(mockDb.plans)
    }
  );

  // TODO customize per payment options
  router.post(
    '/purchase',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      const result = await stripe.createPaymant(req.body)
      res.json(result)
    }
  );

  return router

};