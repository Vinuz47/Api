const {MongoClient} = require("mongodb");
const fs = require('fs');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectionTest() {
    try{
        const database = client.db('mydb');
        const collection = database.collection('products');

        // Read the JSON file
        const path = './sampleData.json';
        const fileContent = fs.readFileSync(path, 'utf-8'); // Read the file content

         // Parse the JSON file content
         const data = JSON.parse(fileContent); // Convert JSON string to JS object/array

         // Insert the data into the collection
         const result = await collection.insertMany(data);
         console.log(result);
    }finally{
        await client.close();
    }
}

connectionTest().catch(console.dir);
