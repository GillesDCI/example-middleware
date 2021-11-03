function authorizeUser(req, res, next){
    //check if there's a secret in the request 
    if(req.body.secret == null){
        return res.status(401).json({responsecode:401, responsemessage:'Unauthorized'})
    }
    
    console.log("Permission to access this route");

    next();
}

module.exports = {authorizeUser};