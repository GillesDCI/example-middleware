//middleware function : logging
function logging(req, res, next){
    console.log("I am in the middle");

    console.log("The request method this was requested with: ", req.method);
    
    //go to the next middleware
    next();
}

function loggingtime(req, res, next){
    console.log("The time of the request is ", new Date().toLocaleDateString());
    next();
}

const logcombination = [logging, loggingtime];

module.exports = {logging, loggingtime, logcombination}