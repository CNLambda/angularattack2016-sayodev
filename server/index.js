/*

Angular Attack 2016
SayoDev Backend

/ GET - root path
/board/create POST - create new board
/board/{board_info}/getinfo GET - get board info
/board/{board_id}/card/create POST - create new card
/board/{board_id}/card/{card_id}/edit POST - edit card
/board/{board_id}/card/{card_id}/delete POST - delete card

*/

// opbeat monitoring init
var opbeat = require('opbeat').start({
  appId: '985e587916',
  organizationId: 'df2eed443e9b4393833d3ff75667ec34',
  secretToken: '75f891484eda32ce959b540e9a4ae39cf2191ee0'
})

// init express
var express = require('express');
var app = express();

// require postgress module
var pg = require('pg');
// heroku db login data
var conString = "postgres://cspwarqsouinhp:MwblYm2sFAbZmk6dUtlFP3FShC@ec2-54-228-219-2.eu-west-1.compute.amazonaws.com/d7neqnj3jbitt4";
// heroku db requires ssl
pg.defaults.ssl = true;

// set test port to 5000
app.set('port', (process.env.PORT || 5000));

// static files in /public
app.use(express.static(__dirname + '/public'));

// init body parser
var bodyParser = require('body-parser')
app.use(bodyParser.json({
  "type": "*/*"
}));

// set cross origin headers and cpntent type json
app.use(function(req, res, next) {
    if ('POST' == req.method || 'GET' == req.method) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

      res.header('Content-Type', 'application/json');
    }
    next();
});

// init web socket stuff
var expressWs = require('express-ws')(app);
app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    ws.send(msg);
  });
});

// root page
app.get('/', function(request, response) {
  response.send("Welcome to backend of SayoDev's project! :-)");
});

// short function for db stuff
var dbStuff = function(callback){
  pg.connect(conString, function(err, client) {
    callback(err, client);
  });
};

var boardClients = {};

// web socket broadcast
var chatBroadcast = function broadcast(board_id, data) {
  boardClients[board_id].forEach(function each(client) {
    try {
      client.send(data);
    }
    catch(e){

    }
  });
};

// user sends message to server
app.ws('/message', function(ws, req) {
  ws.on('message', function(msg) {
    var data = JSON.parse(msg);
    var board_id = data.board_id;
    var join = data.join;
    var message = data.message;
    var username = data.username;
    if(!boardClients[board_id]){
      boardClients[board_id] = [];
    }
    if(join){
      boardClients[board_id].push(ws);
    }
    chatBroadcast(board_id, msg);
  });
});

// create new board
// {[title]}
app.post('/board/create', function(request, response) {
  // require request body
  var data = request.body;

  var title = data.title || null;
  dbStuff((err, client) => {
    if (err) throw err;

    // try it three times...
    function a(x) {
      if(!x) x = 1;
      if(x == 3){
        // three times is enough imao
        response.end("No. Just no.");
        return;
      };
      client.query('INSERT INTO board (title) VALUES($1) RETURNING id;',
          [title], (err, result) => {
            if(err){
              return a(x+1);
            }
            var id = result.rows[0].id;

            // break connection to db
            client.end();
            // return db-generated id of new board
            response.send({
              "board_id": id
            });
      });
  };
  // start trying
  a();
  });
});

// create new card
// {type, [color, title, content]}
app.post('/board/:id/card/create', function(request, response) {
  var data = request.body;
  var params = request.params;

  var board_id = params.id;
  var type = data.type;
  var color = data.color || null;
  var title = data.title || null;
  var content = data.content || null;

  dbStuff((err, client) => {
    if (err) throw err;
    // Create card
    client.query('INSERT INTO card (board_id, type, color, title, content) VALUES ($1, $2, $3, $4, $5);',
        [board_id, type, color, title, content], (err, result) => {
          if(err) console.log(err);
          client.end();
          response.send({
            "status": "OK"
          });
    });
  });
});

// edit card
// {[color, title, content]}
app.post('/board/:board_id/card/:card_id/edit', function(request, response) {
  var data = request.body;
  var params = request.params;

  var board_id = params.board_id;
  var card_id = params.card_id;

  var color = data.color || null;
  var title = data.title || null;
  var content = data.content || null;

  dbStuff((err, client) => {
    if (err) throw err;
    // Edit card
    client.query('SELECT * FROM CARD WHERE id = $1;', [card_id], (err, result) => {
        if(result.rows.length === 0) {
          client.end();
          response.status(500).end("Card '"+card_id+"' doesn't exist.");
          return;
        }
        var obj = result.rows[0];
        if(obj.board_id != board_id){
          client.end();
          response.status(500).end("Wrong board id.");
          return;
        }
        // COALESCE: update only, if value isn't null
        client.query('UPDATE CARD SET color = COALESCE($1, color), title = COALESCE($2, title), content = COALESCE($3, content) WHERE id = $4;', [color, title, content, card_id], (err, result) => {
          if(err){
            client.end();
            response.status(500).send({"request_body": request.body,"error": err});
            return;
          }
          client.end();
          response.send({
            "status": "OK"
          });
        });
    });
  });
});

// delete card
app.post('/board/:board_id/card/:card_id/delete', function(request, response) {
  var params = request.params;

  var board_id = params.board_id;
  var card_id = params.card_id;

  dbStuff((err, client) => {
    if (err) throw err;
    // Edit card
    client.query("SELECT * FROM CARD WHERE id = $1;", [card_id], (err, result) => {
        /*response.send({
          "result": result
        });
        return; */
        if(result.rows.length === 0) {
          client.end();
          response.status(500).end("Card '"+card_id+"' doesn't exist.");
          return;
        }
        var obj = result.rows[0];
        if(obj.board_id != board_id){
          client.end();
          response.status(500).end("Wrong board id.");
          return;
        }
        client.query("DELETE FROM CARD WHERE id = $1;", [card_id], (err, result) => {
          if(err){
            console.error(err);
            return;
          }
          client.end();
          response.send({
            "status": "OK"
          });
          return;
        });
    });
  });
});


// get board info
app.get('/board/:id/getinfo', function(request, response) {
  var params = request.params;
  var board_id = params.id;
  var info = {};
  dbStuff((err, client) => {
    if (err) throw err;
    // Get current board
    client.query('SELECT title FROM BOARD WHERE id = $1;', [board_id], (err, result) => {
      if(result.rows.length === 0) {
        client.end();
        response.status(404).send("null");
        return;
      }
      var obj = result.rows[0];
      info.title = obj.title;
      client.query('SELECT * FROM CARD WHERE board_id = $1 ORDER BY id;', [board_id], (err2, result2) => {
        result2.rows.forEach(row => {
          delete row.board_id;
        });
        info.cards = result2.rows;
        client.end();
        response.send(JSON.stringify(info));
      });
    });
  });
});

// start http server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
