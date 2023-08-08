const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

//Routes
app.use("/", require("./routes/index"));

app.listen(PORT, console.log(`Server running on port ${PORT}`));
