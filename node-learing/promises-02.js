const promise_ = new Promise((resolve , reject) => {
    const userId = 5;
    setTimeout(()=>{
        if(userId<=5 && userId>=1){
            resolve(userId);
        }else{
            reject(userId);
        }
    },2000)
})

promise_.then(()=>{
    console.log("Fetching User Data");
}).catch(()=>{
    console.log("rejected");
})


