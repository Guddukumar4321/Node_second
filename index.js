
const dbconnection = require('./mongodb')


const main = async () => { 

    let data = await dbconnection();
     data = await data.find({}).toArray();
     console.warn(data);
}

main();