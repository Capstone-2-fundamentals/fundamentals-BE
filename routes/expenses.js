const express = require("express");
const router = express.Router()
const { Expense } = require("../models/expense");



//GET all expenses
router.get("/",async(req, res)=>{
    const expense = await Expense.findAll();
    res.json(expense);
});

//GET one expense
router.get("/:id",async(req, res) => {
    const expense = await Expense.findByPk(req.params.id);
    if(!expense) return res.status(404).json({ error:"Oopsie nothing here" }); 
    res.json(expense)
});

//CREATE expense
router.post("/",async(req, res)=>{
    const expense = await Expense.create(req.body);
    res.status(201).json(expense);

})

// UPDATE an expense
router.patch("/:id", async(req, res) =>{
    const expense = await Expense.findByPk(req.params.id);
    if(!expense) return res.status(404).json({error:"Oopsie nothing here!"});
     await expense.update(req.body);
     res.json(expense);
});

//DELETE an expense
router.delete("/:id", async (req, res) => {
    const expense = await Expense.findByPk(req.params.id);
    if(!expense) return res.status(404).json({error:"Oopsie nothing here!"});
    await expense.destroy(req.body);
    res.sendStatus(204);
});

module.exports = router;