const {gql} = require ("apollo-server");

exports.typeDefs = gql`

    type Query{
        hello: [String]
        products: [Product!]!
        product(id:ID!):Product
        categories:[Category]!
        category(id:ID!):Category
    }
    type Mutation {
        addCategory(input:AddCategoryInput): Category!
        addProduct(input:AddProductInput):Product!
        #deleting the category
        deleteCategory(id:ID!): Boolean
        #updating the value 

        updateCategory(id:ID!,input:UpdateCategoryInput): Category!

    }




    # //object Type
    type Product{
        id:ID
        name: String!
        description: String!
        quantity:Int!
        price: Float!
        onSale:Boolean!
        category: Category
        reviews:[Review]!
    }


    type Category {
        id:ID!
        name: String!
        products:[Product!]!
    }


    type Review{

        id: ID,
        date: String!,
        title: String!,
        comment: String!,
        rating: Int!,
    }

    input AddCategoryInput{
        name:String!
    }

    input AddProductInput{
        name:String!,
        description: String!,
        image: String!,
        price: Float!,
        onSale: Boolean,
        categoryId: String!,
    }
    input UpdateCategoryInput{
        name: String!
    }

`