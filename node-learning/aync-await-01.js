const promise = require('./promises_solution');

async function getPromise(userId) {
    try {
        console.log("Fetching data ...");
        const user = await promise.fetchUser(userId);
        console.log("Fetched SuccesFully",user);
    } catch (error) {
        console.log("Error:",error);
    }
}

getPromise(7)
getPromise(4)