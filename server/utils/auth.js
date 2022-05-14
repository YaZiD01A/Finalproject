const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '3h';

module.exports = {
//Checking to see if you the user has a token
  authMiddleware: function ({ req }) {
    // Help get the token
    let token = req.body.token || req.query.token || req.headers.authorization;

    // Getting the token from the authorization section by separating Bearer
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }
    

    if (!token) {
        return req;
      }
  
      try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
      }
      catch {
        console.log('Invalid token');
      }
  
      return req;
    },
    signToken: function ({ firstName, email, _id }) {
      const payload = { firstName, email, _id };
  
      return jwt.sign(
        { data: payload },
        secret,
        { expiresIn: expiration }
      );
    }
  };