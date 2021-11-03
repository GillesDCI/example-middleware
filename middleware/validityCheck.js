exports.checkValidId = (req, res, next) => {
    //extracting information from req.query (parameters supplied as /tea?teaId=1&from=mobile)
    const {teaId, from} = req.query;

    const allowedOrigins = ['mobile', 'browser']

    //testing whether the id is a number
    if(isNaN(teaId)){
        return res.status(400).json({message:'Bad request: malformed ID'})
    }

    //checking the origin of the request through the ?from parameter
    if(from != null && allowedOrigins.includes(from.toLowerCase())){
        console.log("We detected the origin ", from)
    } else {
        console.log("Request with unkown origin")
    }

    next();
}