const {products}= require("./db")

exports.Category={
    products:({id:categoryId},args,{db})=>{
        //const categoryId = parent.id;
        return db.products.filter((product)=> categoryId===product.categoryId);
        
    },
}
