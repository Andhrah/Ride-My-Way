import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../../models/connect';

const newUser = (req, res) => {
  const {
    fullname, email, password,
  } = req.body;

  // before saving the user in the database
  // modify the password by hashing or turning
  // the password into some string of text that can't be
  // understood

  db.connect((err) => {
    if (err) {
      return res.status(500).json({
        message: 'could not connect to the server', err,
      });
    }
    bcrypt.hash(password, 10)
      .then((hash) => {
        const insertText = 'INSERT INTO Users(fullname, email, password) values($1, $2, $3)';
        const insertValue = [fullname, email, hash];
        db.query(
          insertText, insertValue,
          (error) => {
            if (error) {
              return res.status(400).json({
                message: 'Invalide user input',
              });
            }
            // generate token for user
            // use userid to generate token
            db.query('SELECT * FROM Users WHERE email = $1', [email], (e, result) => {
              if (e) {
                return res.status(400).json({
                  message: 'Sorry an error occured',
                });
              }

              const userId = result.rows[0].id;
              const token = jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: '4 hours' });
              return res.status(201).json({
                message: 'User created sucessfully',
                token,
              });
              db.end();
            });
          },
        );
      });
  });
};

export default newUser;
