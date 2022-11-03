let arr = [
    {
        product_name: "phone",
        price: 10000,
        brand: "vivo"
    },
    {
        product_name: "shoe",
        price: 5000,
        brand: "adidas"

    },
    {
        product_name: "bike",
        price: 100000,
        brand: "Ns"
    },
    {
        product_name: "car",
        price: 150000,
        brand: "swift"
    }
]
console.log(arr[2]);
console.log(arr[2].price);
arr.push(
    {
        product_name: "abc",
        price: 10000,
        brand: "xyz"
    }

)
console.log(arr)
delete arr[3].brand;
console.log(arr)
arr[0].stock = 5;
console.log(arr)
arr.pop()