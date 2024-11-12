


const messageHandler = (res , statusCode , message , payload)=>{


return res.status(statusCode).json({message : message , payload :payload })

}



module.exports = {messageHandler}