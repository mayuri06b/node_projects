const SECRET_KEY = "evns123"

function add(a , b) {
    return a+b;
}
function sub(a, b) {
    return a-b;
}
function secret() {
    return SECRET_KEY;
}

module.exports = {add, sub , SECRET_KEY}


