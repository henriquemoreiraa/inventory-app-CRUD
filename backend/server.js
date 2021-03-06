const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./database/connect');

connectDB();

app.use(errorHandler);

app.use(express.json());
app.use(express.urlencoded( { extended: false } ));

app.use('/categories', require('./routes/categories'));
app.use('/products', require('./routes/products'));

app.listen(port, () => console.log(`Server started on port ${port}`));

