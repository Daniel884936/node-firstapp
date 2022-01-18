
module.exports.buildApiResult = (data,status)=>{
    return{
            data, 
            status
    }
}

module.exports.buildApiResult = (data,status,errors)=>{
    return{
            data, 
            status,
            errors
    }
}
