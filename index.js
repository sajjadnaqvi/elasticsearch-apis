const express = require('express');
const app = express();
const PORT = process.env.PORT;

const trafficRoutes = require('./Routes/Traffic');

app.use(trafficRoutes);

app.listen(PORT,()=>{
    console.log("connection ban gaya ha");
});