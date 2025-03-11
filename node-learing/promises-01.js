const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; 
        if (success) {
            resolve("✅ Operation Successful!");
        } else {
            reject("❌ Operation Failed!");
        }
    }, 2000);
});


myPromise
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.log(error); 
    });
