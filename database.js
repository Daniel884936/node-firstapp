const config = require('config')
const mongoose = require('mongoose');

const CONNECTION_STRING = config.get('configDb.host')

const dbConfig = {
    useNewUrlParser: config.get('configDb.useNewUrlParser'),
    useUnifiedTopology: config.get('configDb.useUnifiedTopology')    
 }

 mongoose.connect(CONNECTION_STRING,
    {...dbConfig}
    ).then(()=> console.log('Connected to db'))
    .catch(error=>console.log(error))

