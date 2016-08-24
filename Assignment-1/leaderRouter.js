/**
 * Created by arunbalajip on 8/24/2016.
 */


(function () {
var express = require('express');
var bodyParser = require('body-parser');
var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all(function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })

    .get(function (req, res, next) {
        res.end('Will send all the leaders to you!');
    })

    .post(function (req, res, next) {
        res.end('Will add the leaders: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .delete(function (req, res, next) {
        res.end('Deleting all leaders');
    });

leaderRouter.route('/:leadersId')
    .all(function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })

    .get(function (req, res, next) {
        res.end('Will send details of the leaders: ' + req.params.leadersId + ' to you!');
    })

    .put(function (req, res, next) {
        res.write('Updating the leaders: ' + req.params.leadersId + '\n');
        res.end('Will update the leaders: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete(function (req, res, next) {
        res.end('Deleting leaders: ' + req.params.leadersId);
    });

module.exports = function () {
    return leaderRouter;
};
})();
