import express from "express"; //Set up our main function variable for calling the Express module and require it as a dependency
const app = express(); //Object returned by express()

import bodyParser from "body-parser"; //Set up our main function variable for calling the Body Parser module and require it as a dependency
app.use(bodyParser.json()); //Use the bodyParser.json() function to parse JSON data

import {
    retrieveAllInstructions,
    createInstruction,
    deleteInstruction,
} from "./db.js";

//Express needs a port and host for its output. We'll define these here and change them later.
const port = 3001;
const host = "localhost";

app.get("/", (req, res) => {
    //This is the main route for our app. It will be called when the user goes to the root of our website.
    //We'll use the res.send() function to send a response back to the user.
    res.send("Hello World!");
});

app.get("/instruction", async (req, res) => {
    res.send(await retrieveAllInstructions());
});

app.post("/instruction", (req, res) => {
    console.log(req.body);
    const { product, instruction_link, materials } = req.body;
    res.send(createInstruction(product, instruction_link, materials));
});

app.delete("/instruction", (req, res) => {
    const { product, instruction_link, materials } = req.body;
    res.send(deleteInstruction(product, instruction_link, materials));
});

app.listen(port, host, () => {
    console.log(`Server started at ${host} port ${port}`);
});
