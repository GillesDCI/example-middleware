const express = require('express');
//making the imports of the middleware:
const {checkValidId} = require('./../middleware/validityCheck');
const {authorizeUser} = require('./../middleware/authorizeUser');

const router = express.Router();

const teas = [
    {id:1, name:'Green Tea'},
    {id:2, name:'Oolong Tea'},
    {id:3, name:'Sencha Tea'},
    {id:4, name:'Bio Tea'}
 ]

//http://localhost:3000/tea?teaId=1&from=mobile ---> Query parameter (separated by '&key=value')
router.get('/',checkValidId, (req, res) => {
    const {teaId} = req.query;
    //find the tea by id
    const tea = teas.find(t => t.id == teaId);

    if(!tea) {
        return res.status(404).json({message:`Tea with id ${teaId} not found.`})
    }

   return res.status(200).json({teaId, tea});
});

//http://localhost:3000/tea/1 --> URL parameter
router.get('/:id', (req, res) => {
    const teaId = req.params.id;

    //find the tea by id 
    const tea = teas.find(t => t.id == teaId);

    if(!tea) {
        return res.status(404).json({message:`Tea with id ${teaId} not found.`})
    }

   return res.status(200).json({teaId, tea});
});

router.post('/new', authorizeUser, (req, res) => {
    //takes maximum id in the array and + 1
    const newId = Math.max.apply(Math, teas.map(function(tea) { return tea.id; })) + 1
    //extract name from the body parameter
    const {name} = req.body;
    //create new tea object 
    const newTea = {
        id:newId,
        name:name
    }
    //push tea object inside the array
    teas.push(newTea);
    //returns new list of teas
    return res.status(200).json({teas:teas});
});



module.exports = router;