var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var path = require("path");
var routeChecker = require('./middleware/routeChecker.mw');

var app = express();

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "Unknown",
  password: "Unknown",
  database: "Unknown"
});

var clientPath = path.join(__dirname, "../client");

app.use(express.static(clientPath));
app.use(bodyParser.json());
app.get('*', routeChecker.isAsset);

app.route("/api/posts")
  .get(function(req, res) {
    rows("GetAllPosts") //index.html loads the joined tables of Posts, Users & Categories - this feeds the Divs with all info//create procedure PostDivs
      .then(function(posts) {
        res.send(posts);
      })
      .catch(function(err) {
        console.log(err);
        res.sendStatus(500);
      });
  })
  .post(function(req, res) {
    var newPost = req.body;
    row("InsertPost", [newPost.title, newPost.content, newPost.userid]) // create procedure InsertPost
      .then(function(id) {
        res.status(201).send(id);
      })
      .catch(function(err) {
        console.log(err);
        res.sendStatus(500);
      });
  });

app.route('/api/posts/:id')
    .get(function(req, res) {
        row('GetOnePost', [req.params.id]) // create procedure GetOnePost
        .then(function(post) {
            console.log(post);
            res.send(post);
        }).catch(function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    }).put(function(req, res) {
        empty('UpdatePost', [req.params.id, req.body.message]) // create procedure to UpdatePost
        .then(function() {
            res.sendStatus(204);
        }).catch(function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    }).delete(function(req, res) {
        empty('DeletePost', [req.params.id]) // create procedure to DeletePost
        .then(function() {
            res.sendStatus(204);
        }).catch(function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    });

app.route("/api/users").get(function(req, res) {
  rows("GetUsers") // create procedure to GetUsers
    .then(function(users) {
      res.send(users);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});

// app.route("/api/user").get(function(req, res) {
//   row("GetOneUser") // create procedure to GetOneUser
//     .then(function(users) {
//       res.send(users);
//     })
//     .catch(function(err) {
//       console.log(err);
//       res.sendStatus(500);
//     });
// });


app.route("/api/categories").get(function(req, res) {
  rows("GetCategories") // create procedure to GetCategories
    .then(function(categories) {
      res.send(categories);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



app.listen(3000);

function callProcedure(procedureName, args) {
  return new Promise(function(resolve, reject) {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err);
      } else {
        var placeholders = "";
        if (args && args.length > 0) {
          for (var i = 0; i < args.length; i++) {
            if (i === args.length - 1) {
  
              placeholders += "?";
            } else {
              placeholders += "?,";
            }
          }
        }
        var callString = "CALL " + procedureName + "(" + placeholders + ");"; 
        connection.query(callString, args, function(err, resultsets) {
          connection.release();
          if (err) {
            reject(err);
          } else {
            resolve(resultsets);
          }
        });
      }
    });
  });
}

function rows(procedureName, args) {
  return callProcedure(procedureName, args).then(function(resultsets) {
    return resultsets[0];
  });
}

function row(procedureName, args) {
  return callProcedure(procedureName, args).then(function(resultsets) {
    return resultsets[0][0];
  });
}

function empty(procedureName, args) {
  return callProcedure(procedureName, args).then(function() {
    return;
  });
}



