const express = require("express");
var cors = require('cors')
const apiRoute = require("./routes/api");
const PORT = 8000;
const app = express();

app.use(cors())
app.use("/api", apiRoute);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});