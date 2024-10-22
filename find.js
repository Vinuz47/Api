const {MongoClient} = require("mongodb");


const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function findAllDetails() {
    try{
        const database = client.db('mydb');
        const collection = database.collection('products');

       
         // Find all documents in the collection
         
         const result = await collection.find().toArray();//Convert the cursor to an array

         // Convert the array of documents to JSON format
         const jsonData = await JSON.stringify(result,null,2);// Pretty-print with 2-space indentation
         
         console.log(jsonData);

         return jsonData;
         
    }catch(err){
        console.error(err);
    }
    finally{
        await client.close();
    }
}

findAllDetails()
    //.then(json => console.log("Returned JSON:", json))
    .catch(console.dir);
