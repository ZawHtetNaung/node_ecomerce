const router = require('express').Router();

router.get("/",(req,res)=>{
    res.json({msg: "All Users"});
});

// router.get("/:id", (req,res)=>{
//     let id = req.params.id;
//     res.json({msg: "Request ID is "+id})
// })

router.route("/:id")
.get((req,res)=> res.json({msg: "Requst ID is "+req.params.id}))
.patch((req,res)=> res.json({msg: "Edited ID is "+req.params.id}))
.delete((req,res)=> res.json({msg: "Deleted ID is "+req.params.id}))

router.post("/", (req,res)=>{
    res.json(req.body);
})

// router.patch("/:id", (req,res)=>{
//     let id = req.params.id;
//     res.json({msg: "Edited ID is "+id})
// })

// router.delete("/:id", (req,res)=>{
//     let id = req.params.id;
//     res.json({msg: "Deleted iD is "+id})
// })

module.exports = router;