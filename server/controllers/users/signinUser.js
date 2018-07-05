import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../../models/connect';

const signin = (res, req) => {
  const { email, password } = req.body;
  // check if you are connected to the database
  db.connect((err) => {
    if (err) {
      return res.status(500).json({
        message: 'could not connect to the server', err,
      });
    }
    db.query('SELECT * FROM Users WHERE email = $1', [email])
      .then((result) => {
        const user = result.row[0];
        if (!user) {
          return res.status(404).json({
            message: 'Invalid User',
          });
        }
        return bcrypt.compare(password, user.password)
          .then((valid) => {
            if (valid) {
              const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '4 hrs' });
              return res.status(200).json({
                message: 'Signed in sucessful',
                token,
              });
            }
            return res.status(401).json({
              message: 'Invalid Credential',
            });
          })
          .catch(error => res.status(500).json({
            message: 'An error occured',
          }));
      })
      .catch(() => {
        return res.status(500).json({
          maessage: 'An error occured',
        });
      });
  });
};

export default signin;
