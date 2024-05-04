const dbconnection = require('./mongodb');


const update = async () => {
    const db = await dbconnection();

    const result = await db.updateMany(
        {
            'name': "vivo T1 5G  111111"
        }, {$set: { 'name': "vivo T1 5G", 'price':'2365476856' }}
    );


}

// update();