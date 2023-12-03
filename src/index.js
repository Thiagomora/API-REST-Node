const express = require('express'); 
const app = express(); //runnign the framework express
const morgan = require('morgan'); //morgan is a middleware

//settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);

//middlewares
app.use(morgan('dev')); //It allows me to see through the console what is arriving from the server
app.use(express.json()); //it allows me to receive formats json and understand it
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/index.js'));
app.use('/api/movies',require('./routes/movies.js'));
app.use('/api/users', require('./routes/users.js'));

//starting the server 
app.listen(app.get('port'),()=> { // a server port  is made
    console.log(`Server on port ${app.get('port')}`);
});
