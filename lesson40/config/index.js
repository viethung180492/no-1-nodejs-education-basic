var configValues = require('./config');

module.exports = {
    getDBConnectString: function(){
        return 'mongodb+srv://' + configValues.uname + 
                            ':' + configValues.pwd + 
                            '@demomongo.savqsbx.mongodb.net/';
    }
}