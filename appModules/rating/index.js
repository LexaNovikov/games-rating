const config = require('./config');
const makeRatingFile = require('./rating-file')
const {createRating, updateRating} = require('./calculations')
module.exports = {
    createRating,
    updateRating,
    config,
    makeRatingFile,
}