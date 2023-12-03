const{Router} = require('express'); //export the router method from module express
const router = Router(); // the method router we keep it in the variable router
const _= require('underscore'); //library that allows us to have functionalities to process data, obtain arrays, etc.

const movies = require('../sample.json'); //call the path where the movies are stored

//route
router.get('/',(req,res)=>{
    res.json(movies);
});

router.post('/',(req,res)=>{ //a post type request is made
    const {title, director, year } = req.body;
    if(title && director && year){ //params that are verified
        const id = movies.length + 1; //we add 1 to the id of the last movie
        const newMovie = {...req.body,id}; //we give you everything that the request body
        movies.push(newMovie);//we insert at the end
        res.json(movies);
        res.send('saved');
    } else{
        res.status(500).json({error:'There was an error'})
    }
});
                //params
router.delete('/:id',(req, res) => { // a delete type request is made 
    const { id } = req.params;       //received the id from the parameter
    _.each(movies,(movie, i) => {
       if(movie.id == id) {
        movies.splice(i, 1);
       }
    });
    res.send(movies); //send the array update
});

router.put('/:id', (req, res) => { //a update type request is made
    const { id } = req.params; //received the id from the parameter
    const {title, director, year } = req.body;
    if(title && director && year){
        _.each(movies, (movie, i) => {
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
            }
        });
        res.send(movies);
    } else{
        res.status(500).json({error:'There was a error.'});
    }
});

module.exports = router;