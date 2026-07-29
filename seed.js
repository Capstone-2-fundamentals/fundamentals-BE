const { db, Expense } = require ("./models/expense");


async function seed(){
    await db.sync({ force:true});

 await Expense.bulkCreate([
    {title: "Groceries", amount: 52.3,    category: "food",  note: "bought some vegetables,meats,fruits and milk",paid: true},
    { title: "Uber ride", amount: 12.00, category: "transport", paid: false },
      { title: "Movie night", amount: 20.00, category: "entertainment", paid: true },
    ]);


console.log("Seeded!");
await db.close();
}

seed();
    
   

  
    



