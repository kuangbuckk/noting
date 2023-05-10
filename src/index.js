const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const route = require('./routes');
const hbs = require('handlebars');

const db = require('./config/db');
//Connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set(
    'view engine',
    'hbs',
);


hbs.registerHelper("sum", function(a, b)
{
    return parseInt(a) + parseInt(b);
});

//console.log(app.get('view engine'));

app.set('views', path.join(__dirname, 'resources', 'views'));
//console.log(app.get('view'));
console.log('PATH: ', path.join(__dirname, 'resources/views'));

//route init and begin the methods
route(app);

app.listen(port, () => console.log(`App listening on port ${port}`));
