const express = require('express');
const router = express.Router();
const {MongoClient} = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);


router.get('/',async (req,res)=>{
    try{
        // Call findAllDetails to get the data
        const jsondata = await findAllDetails();

        //send data in JSON format to response
        res.send(jsondata);
    }catch(err){
        console.error(err);
        res.status(500).send("An error occurred while fetching data.");
    }
    
});

router.post('/',(req,res)=>{
    res.send({msg:'hello guys user POST'});
})

async function findAllDetails() {
    try{
        const database = client.db('mydb');
        const collection = database.collection('products');

       
         // Find all documents in the collection
         
         const result = await collection.find().toArray();//Convert the cursor to an array

         // Convert the array of documents to JSON format
         //const jsonData = await JSON.stringify(result,null,2);// Pretty-print with 2-space indentation
         
        // console.log(jsonData);

         return result;
         
    }catch(err){
        console.error(err);
    }
    finally{
        await client.close();
    }
}



module.exports = router;