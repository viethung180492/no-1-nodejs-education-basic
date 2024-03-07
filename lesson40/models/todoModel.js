var mongooes = require('mongoose');

var Schema = mongooes.Schema;

var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var Todo = mongooes.model('Todos',todoSchema);

module.exports = Todo;