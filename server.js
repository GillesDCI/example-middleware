const express = require('express');

const app = express();

//middleware that allows us to parse json (defined inside the body of the request)
//sent to the server to the req.body object
app.use(express.json());


//importing the routes 
const userRoutes = require('./routes/userRoutes');
const teaRoutes = require('./routes/teaRoutes');
const loggingRoutes = require('./routes/loggingRoutes');


//register routes
app.use('/user', userRoutes); //access the routes on the /user path 
app.use('/tea', teaRoutes); //access the routes on te /tea path
app.use('/logging', loggingRoutes); //access the routes on te /logging path



//listening for requests on port 3000
app.listen(3000, () => {
    console.log("The server is listening");
}) 


