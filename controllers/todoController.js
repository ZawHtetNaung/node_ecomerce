var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// connect to the database
var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kiss some coding ass'}];

// const itemToDelete = 'get milk';
// console.log('delete:',itemToDelete);
// const filteredData = data.filter(todo => todo.item !== itemToDelete);
// console.log('filter:',filteredData);


module.exports = function(app){
    mongoose.connect('mongodb+srv://banyeinnk:lRAOBQ00iMT0u8GK@todo.ablwcvp.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    // Your code here
    var todoSchema = new mongoose.Schema({
        item: String
    });

    var Todo = mongoose.model('Todo', todoSchema);
    // Create and save a new Todo document
   // Creating a new document
    // const newItem = { item: 'buy flowers' };
    // const todo = new Todo(newItem);
    // todo.save();
    // app.get('/todo', function(req,res){
    //     //get data from mongodb and pass it to view
    //     Todo.find({}, function(err,data){
    //         if(err) throw err;
    //         res.render('todo', {todos: data});
    //     })
    // });

    app.get('/todo', (req, res) => {
      // get data from mongodb and pass it to view
      Todo.find({})
        .exec()
        .then((data) => {
          res.render('todo', { todos: data });
        })
        .catch((err) => {
          console.error('Error retrieving todos:', err);
          res.status(500).json({ error: 'An error occurred while retrieving todos' });
        });
    });


    app.get('/data', (req, res) => {
       res.json(data);
    })

    app.get('/data/:item', (req, res) => {
      let item = req.params.item;
      let dat = data.find(da => da.item == item);
      if(dat) {
        res.json(dat);
      } else {
        res.json({msg: "No data with that name sir"});
      }
    })

    app.get("*",(req,res) => {
      res.send({msg:"No Route Found!"});
    });

 
      
      

      app.post('/todo', urlencodedParser, function (req, res) {
        let item = req.body.item;
        console.log("Request item is", item);
        // get data from the view and add it to mongodb
        var newTodo = new Todo(req.body);
        newTodo
          .save()
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            console.error('Error saving todo:', err);
            res.status(500).json({ error: 'An error occurred while saving the todo' });
          });
      });
      
      app.patch('/todo/:item/:name', (req,res,next)=> {
        let item = req.params.item;
        let name = req.params.name
        console.log(item);
        res.status(200).json({item,name});
      })

      // app.delete('todo/:item', (req,res,next)=> {
      //   let item = req.params.item;
      //   res.status(200).json ({msg: "Delete item is " + item});
      // })

      app.delete('/todo/:item', function (req, res) {
        
        // Todo.deleteOne({ item: req.params.item.replace(/\-/g, "") })
        //   .then((data) => {
        //     res.json(data);
        //   })
        //   .catch((err) => {
        //     console.error('Error deleting todo:', err);
        //     res.status(500).json({ error: 'An error occurred while deleting the todo' });
        //   });
        let item = req.params.item;
        res.status(200).json ({msg: "Delete item is " + item});
      });
      
    console.log('Connected to MongoDB');

  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

   
};