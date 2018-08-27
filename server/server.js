const express = require('express');
const bodyParser = require('body-parser');
const dashboardRouter = require('./routes/dashboard.router');
const ownersRouter = require('./routes/owners.router');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('server/public'));

app.use(bodyParser.json());

app.use('/dashboard', dashboardRouter);
app.use('/owners', ownersRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});