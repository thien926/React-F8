
// =================== REST PARAMETERS
function logger(a, ...params) {
    console.log(params);
}
logger(1, 2, 3, 4, 5);
console.log("============ Variable =====")
// ====================

function logger2({ name, price, ...rest }) {
    // console.log(obj);
    console.log(name);
    console.log(price);
    console.log(rest);
}
logger2({
    name: 'Javascript',
    price: 1000,
    description: 'Description content'
})
console.log("============ Object =====")
// =======================

function logger3([a, b, ...rest]) {
    // console.log(obj);
    console.log(a);
    console.log(b);
    console.log(rest);
}
logger3([2, 6, 5, 4, 6, 7])
console.log("============ Object =====")
