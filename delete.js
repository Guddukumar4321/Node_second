const dbconnection = require('./mongodb');

const deleteData = async () => {
    let db = await dbconnection();
    let deleted = await db.deleteMany({name: 'vivo T1 5G'})
    console.warn(deleted)
}

deleteData();
