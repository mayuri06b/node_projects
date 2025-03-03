const handle_error = (res)=>{
    res.end(`Error occured`);
    console.log("Error Occured");
}

module.exports ={
    handle_error
}