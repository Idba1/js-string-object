const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

for(const name in mobile){
    console.log(name);
    console.log(mobile[name]);
}


const keys = Object.keys(mobile);
console.log(keys);
for(const name of keys){
    console.log(name, ':', mobile[name]);
}
