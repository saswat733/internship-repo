import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../models/userModel.js';
import { findUserById } from '../models/userModel.js'
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    createUser(username, email, hashedPassword, (err, results) => {
      if (err) {
        console.error('Error creating user:', err);
        return res.status(500).json({ message: 'Error creating user' });
      }

      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (err) {
    console.error('Error hashing password:', err);
    res.status(500).json({ message: 'Error hashing password' });
  }
};
export const login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, (err, user) => {
    if (err) return res.status(500).json({ message: 'Error finding user' });
    if (!user) return res.status(404).json({ message: 'User not found' });

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ message: 'Error comparing passwords' });
      if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    });
  });
};

export const getProfile = (req, res) => {
  const userId = req.user.id; // Extracted from the JWT token
  console.log(userId);
  
  findUserById(userId, (err, user) => {
    if (err) {
      console.error('Error retrieving user profile:', err);
      return res.status(500).json({ message: 'Error retrieving user profile' });
    }
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  });
};