const { Router } = require('express');
const router = Router();

//routes
router.get('/test',(req,res)=>{
    const data = {
        "name": "Thiago",
        'web': "thiago.com"
    }
    res.json(data);
});

module.exports = router;