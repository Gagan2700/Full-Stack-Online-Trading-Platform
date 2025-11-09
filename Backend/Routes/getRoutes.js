const express = require("express");
const router = express.Router();
const holdingModel = require("../Models/holdings");
const positionModel = require("../Models/positions");

router.get("/allHoldings",async (req,res)=>{
    await holdingModel.find({})
        .then((data)=>{
            res.send(data);
        })
        .catch((e)=>{
            res.send(e.message);
        })
})

router.get("/allPositions",async (req,res)=>{
    await positionModel.find({})
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.send(err.message);
    })
})


module.exports=router;