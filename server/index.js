const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connection URI
const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.gwehrjf.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Connect to the "coffeeDB" database and access its "coffee" collection
    const coffeeCollection = client.db("coffeeDB").collection("coffee");

    // Insert single item
    app.post("/coffee", async (req, res) => {
      // Received data from the client
      const newCoffee = req.body;

      // Insert the defined data into the coffeeCollection
      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/health", (req, res) => {
  res.send("coffee-store server is running");
});

app.listen(port, () => {
  console.log(`coffee-store server is running on port: ${port}`);
});
