const express = require('express') , http = require('http'), config = require('../configration'), main = require('../routes/main'), notFound = require('../middleware/404.js'), app = express();

app.set('port', config.get('express:port'));
app.use(express.logger({ immediate: true, format: 'dev' }));
app.get('/main', main.index);
app.use(notFound.index);

http.createServer(app).listen(app.get('port'));

module.exports = app;