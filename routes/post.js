const router = require('express').Router();

router.get("/",(req,res)=>{
    res.json({msg: "All Posts"});
});

router.route("/:id")
.get((req,res)=> res.json({msg: "Requst ID is "+req.params.id}))
.patch((req,res)=> res.json({msg: "Edited ID is "+req.params.id}))
.delete((req,res)=> res.json({msg: "Deleted ID is "+req.params.id}))

// router.get("/:id", (req,res)=>{
//     res.json({msg: "Request ID is "+req.params.id})
// })

router.post("/", (req,res)=>{
    res.json(req.body);
})

// router.patch("/:id", (req,res)=>{
//     res.json({msg: "Edited ID is "+req.params.id})
// })

// router.delete("/:id", (req,res)=>{
//     res.json({msg: "Deleted iD is "+req.params.id})
// })

module.exports = router;