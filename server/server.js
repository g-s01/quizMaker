const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const dbConfig = require('./config/dbConfig');

const userRoute = require("./routes/usersRoutes");
app.use("/api/users", userRoute);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});