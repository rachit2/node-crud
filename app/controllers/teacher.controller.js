const perf = require('execution-time')();
  exports.beforeIndex = (req, res, next) => {
    b = 46;
    d=10;
   next();
  };

  exports.afterIndex = (req, res, next) => {
    c = 96;
    console.log((a+c) + "  ====TEACHER afterIndex a+c")
    console.log((a+c+d)+ "  === a+c+d")
    res.send('complete')
    const results = perf.stop();
    console.log(results.time); 
  };

  exports.index = (req, res, next) => {
	  perf.start();
    a=4;
    console.log((a+b)+ "=== TEACHERbeforeIndex" );
    next();
  };