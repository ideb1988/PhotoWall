const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const routes = require('./Routes/api')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

/* ----------------------------------MIDDLEWARE------------------------------------ */
app.use(cors());
app.options('*',cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use('/api', routes);


/* ----------------------------APIS : Moved to /Routes/api--------------------------------------- */

app.get('/', async (req, res) => {
    res.json(`We are at Home Page`);
});

/* -----------------------------------LISTENER------------------------------------- */
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})

/* -----------------------------------DATABASE------------------------------------- */
const userName = 'NXD';
const password = 'NXD123';
const dbName = 'PhotoWall';

const mongoDBPath = `mongodb+srv://${userName}:${password}@Cluster-Neel.p3swn.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(mongoDBPath,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, () => {
        console.log(`mongoDB connection is ${(mongoose.connection.readyState === 1 ? 'established' : 'rejected')}`)
    });




