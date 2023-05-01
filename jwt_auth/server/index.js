const express = require("express");
const cors = require("cors");
const app = express();

app.listen(4000, () => {
    console.log("Server Startred on port 4000");
})

app.use(
    cors({
        origin: ["http://localhost:3000"],
        method: ["GET", "POST", "PUT"],
        credentials: true,
    })
);

app.use(express.json());