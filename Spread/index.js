
var array = ['Javascript', 'Ruby', 'PHP'];

var array2 = ['ReactJS', 'Dark'];

var array3 = [...array, ...array2];

console.log(array3);
console.warn("=========== Array ==========");
// ==========================

var obj1 = {
    name : 'Javascript'
};

var obj2 = {
    price : 1000
};

var obj3 = {
    ...obj1,
    ...obj2
};

console.log(obj3);
console.warn("=========== Object ==========");
// ============================

var defaultConfig = {
    api : 'https Default',
    apiVersion : 'v1',
    other:'other',
};

var exerciseConfig = {
    ...defaultConfig,
    api: 'https Exercise'
}

console.log(exerciseConfig);
console.warn("=========== Demo ==========");
// =============================

function logger(...rest) {
    for(let i = 0; i < rest.length; ++i) {
        console.log(rest[i]);
    }
}
logger(...array);
console.warn("========= Function =========")

