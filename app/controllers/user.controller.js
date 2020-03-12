const User = require('../models/user.model.js');
pry = require('pryjs')
const perf = require('execution-time')();

module.exports = {
  index : (req,res, next)=> {
    perf.start();
     a=4;
    console.log((a+b)+ "=== beforeIndex" );
    next();
  },

  afterIndex:  (req,res,next)=>{
    c = 96;
    console.log((a+c) + "  ==== afterIndex a+c")
    console.log((a+c+d)+ "  === a+c+d")
    res.send('complete')
    const results = perf.stop();
    console.log(results.time); 

  },

  beforeIndex: (req,res,next)=>{
    b = 46;
    d=10;
    next();

  }

}
