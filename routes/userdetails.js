var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', (req,res)=> {
  var userdata = req.body( );
  if(userdata.username === "keerthi" && userdata.password ==="keerthi1234")
  {
    res.send(userdata.username ,userdata.password )
  }
  else{
    res.send("invalid credentials");
  }
});

module.exports = router;
