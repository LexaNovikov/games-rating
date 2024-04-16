const http = require('http')
const path = require('path')
const voteRouteController = require('./controllers/vote.js')
const gameRouteController = require('./controllers/game.js')
const mainRouteController = require('./controllers/main.js')
const defaultRouteController = require('./controllers/default.js')
const server = http.createServer((req, res) => {
    const url = req.url
    switch (url) {
        case "/":
            res.statusCode = 200
            mainRouteController(res, "/index.html", ".html");
            break;
            case "/game":
                gameRouteController(res);
                break;
                case "/vote":
                    voteRouteController(res,req);
                    break;
        default:
            defaultRouteController(res,url);
    }

});

server.listen(3005);