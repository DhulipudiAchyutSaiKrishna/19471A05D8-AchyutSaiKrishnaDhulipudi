const express = require('express');
const app = express();


//routes to folders
const numberManagementRoutes = require('./number-management-service/solution1');
const prefixManagementRoutes = require('./prefix-management-service/solution2');


app.use('/numbers', numberManagementRoutes);
app.use('/prefixes', prefixManagementRoutes);

app.get('/', (req, res) => {
    res.send({title: "Success", code: 200});
});



app.listen(3000, (err, res) => {
    console.log('Server listening on port 3000');
});