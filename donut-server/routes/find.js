var express = require('express');
var router = express.Router();

const { DonutFinder } = require("../public/javascripts/donut_finder.js");

const donutFinder = new DonutFinder;

router.post('/', async function(req, res, next) {
    try{
        console.log(typeof(req.body.password));
        //res.status(200).json(await donutFinder.findDonutTest(req.body.email));

        const value = await donutFinder.getDonutNumberThroughEmotion(req.body.emotionText);
        //res.status(200).json(value);
        const donut = await donutFinder.setDonut(value);
        res.status(200).json(donut);
    }catch(error){
        res.status(500).json(error);
    }
  });


  
module.exports = router;