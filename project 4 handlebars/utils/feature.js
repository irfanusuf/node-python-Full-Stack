


const errorHandler =  (res , statusCode , success , message  ) =>{

    return res.status(statusCode).json({ sucess : success , message : message})

}


module.exports = errorHandler