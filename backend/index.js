const express = require("express"); //Set up our main function variable for calling the Express module and require it as a dependency
const app = express(); //Object returned by express()

//Express needs a port and host for its output. We'll define these here and change them later.
const port = 3001;
const host = "localhost";

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, host, () => {
    console.log(`Server started at ${host} port ${port}`);
});
