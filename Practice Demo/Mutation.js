const {v4:uuid} = require("uuid");
const { Category } = require("./Category");
const { products } = require("./db");
exports.Mutation ={
    addCategory:(parent,{input},{db})=>{
        const {name} = input
        const newCategory = {
            id: uuid(),
            name

        }
        db.categories.push(newCategory);
        return newCategory

    },

    addProduct:(parent,{input},{db})=>{
        const {name,description,image,price,onSale,categoryId} = input;
        const newProduct = {
            id:uuid(),
            name,description,image,price,onSale,categoryId

        }
        db.products.push(newProduct);
        return newProduct
    },
    // Deleteing the data
    deleteCategory: (parant,{id},{db})=>{
        db.categories = db.categories.filter((category)=> category.id !==id)
        db.products = db.products.map(product=>{
            if(product.categoryId===id) return{
                ...product,
                categoryId:null
            }
            else return product;
        })
        return true;
    },

//Updating the data

     updateCategory:(parent,{id,input},{db})=> {
         const index = db.categories.findIndex(category=> category.id===id);
         console.log(index);
         db.categories[index]={
             ...db.categories[index],
             ...input,
         };
         return db.categories[index];

    }


     
};