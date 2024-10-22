const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send({msg:'hello guys student GET'});
});

router.post('/',(req,res)=>{
    res.send({msg:'hello guys student POST'});
})



module.exports = router;