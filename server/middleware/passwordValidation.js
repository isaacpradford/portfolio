const express = require('express');
require('dotenv').config();

const API_PASSWORD = process.env.API_PASSWORD;

const validatePassword = (req, res, next) => {
    const { password } = req.headers;

    // Check if password is provided and matches
    if (!password || password !== API_PASSWORD) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    next();
};

module.exports = validatePassword;