var express = require("express");
var router = express.Router();
router.get("/" , (req,res) =>{
    var user={}
    user.name ="keerthi";
    user.age=21;
    res.send(JSON.stringify(user));
});
module.exports = router;
