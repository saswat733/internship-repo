import db from '../config/db.js';

export const createUser = async (username, email, hashedPassword, callback) => {
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  try {
    console.log(email);
    const [results] = await db.execute(query, [username, email, hashedPassword]);
    console.log(results);
    callback(null, results);
  } catch (err) {
    console.log(err);
    callback(err);
  }
};
export const findUserById = async (userId, callback) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  try {
    const [results] = await db.execute(query, [userId]);
    if (results.length === 0) {
      callback(null, null); // No user found
    } else {
      callback(null, results[0]); // User found
    }
  } catch (err) {
    console.error('Error executing query:', err);
    callback(err);
  }
};

export const findUserByEmail = async (email, callback) => {
  try {
    const query = 'SELECT * FROM users WHERE email = ?';
    const [results] = await db.execute(query, [email]);
    callback(null, results[0]);
  } catch (err) {
    callback(err);
  }
};
