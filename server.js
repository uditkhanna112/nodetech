var express=require('express')
var app=express();
var PORT=process.env.PORT;
var connectDB=require('./config/db');

//connecting to database
connectDB();

app.use(express.json({extended:false}));

//CRUD API Endpoints
app.use('/create-product',require('./routes/api/create-product'));
app.use('/read-product',require('./routes/api/read-product'));
app.use('/delete-product',require('./routes/api/delete-product'));
app.use('/update-product',require('./routes/api/update-product'));

//port 3000 fro localhost
app.listen(3000 || PORT)
