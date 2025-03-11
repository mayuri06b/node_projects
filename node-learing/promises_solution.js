function fetchUser(userId){
    const promise_ = new Promise((resolve , reject) => {
        setTimeout(()=>{
            if(userId<5 && userId>1){
                resolve(userId);
            }else{
                reject(`No user Found !!`);
            }
        },2000)
    })

    return promise_;
}

// fetchUser(9).then(()=>{
//     console.log("User Fetched !!");
// }).catch((error)=>{
//     console.log("Error:",error);    
// })

module.exports = {fetchUser};