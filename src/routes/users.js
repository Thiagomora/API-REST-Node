const { Router, response } = require('express');
const router = Router();

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); //link for the page where is it located the api
    const users = await response.json(); //convert from string type to json
    res.json(users);
});

module.exports =router;