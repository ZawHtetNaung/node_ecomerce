var bodyParser = require('body-parser');
var users = [
                {id:'1',name: 'Zaw Htet',age: '20'}, 
                {id:'2',name: 'Htet Naung',age: '25'}, 
                {id:'3',name: 'Naung Naung',age: '30'}, 
             
            ];


module.exports = function(app) {
    app.get('/ecommerce', (req, res) => {
        res.json({msg: "This is get"});
       
      });


    app.get('/ecommerce/:id', (req, res) => {
        let id = req.params.id;
        let user = users.find(user => user.id == id);
        if(user){
            res.json(user);
        } else {
            res.json({msg: "No data with that id sir"})
        }
       
      });

    app.post('/ecommerce', (req, res) => {
        res.json({msg: "This is post"})
       
      });

    app.patch('/ecommerce/:id', (req, res) => {
        let id = req.params.id;
        let editUser = users.find(user => user.id == id);
        if(editUser){
            editUser.name = req.body.name;
            editUser.age = req.body.age;
            res.json(users);
        } else {
            res.json({msg: "No data with that id sir"})
        }
       
      });

    app.delete('/ecommerce/:id', (req, res) => {
        let id = req.params.id;
        users = users.filter(user => user.id != id);
        res.json(users);
      });
}