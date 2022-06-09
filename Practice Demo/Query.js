const {categories, products}= require("./db");

exports.Query= {
    hello:()=>{
        return ["World !", "my","Friend"]
    },

    products:(parent,args,{db})=>{
        return db.products
        // [
    //         {
    //     name1: "MacBook",
    // description: "M1",
    // quantity:1,
    // price: 69000.57,
    // onSale:true
    //         }
    //     ];

    },
    product:(parent,{id},{db})=>{
        const productId = id;

        const product = db.products.find((product) => product.id===productId);
        return product;
    },

    categories:(parent,args,{db})=>{
        return db.categories;
    },

 category: (parent,args,{db})=>{
            const categoryId = args.id;
        return  db.categories.find((category)=> category.id===categoryId);
            //return category;
        },
}
