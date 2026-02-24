let handleSum = (callback) =>{
    console.log(callback(1,2));
    
};
handleSum((a,b) => {
    return a + b;
});

// forEach ();
let listNumber = [10, 20, 30, 40, 50];

for (let i = 0; i < listNumber.length; i++) {
    console.log(listNumber[i]);
}

listNumber.forEach((item,index,array) => {
    console.log(`${index} : ${item}`);
    console.log(array);
    
});

//map() : Tạo ra mảng mới
let newArray = listNumber.map((number,index) => {
    return (number =number*2);
});

console.log(newArray);
let so = [1,2,3,4];
let newSo = so.filter((item,index,arr) => {
    return item % 2 ===0;
});
console.log(newSo);

//reduce()
let sumlistNumber = so.reduce((acc,curr,index,array) => {
    return (acc += curr);
},0);

console.log(sumlistNumber);



