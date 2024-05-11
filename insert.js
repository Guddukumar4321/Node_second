const dbconnection = require('./mongodb');


const insert = async () => {
    const db = await dbconnection();
    const result = await db.insertOne(
     { name: 'vivo T1 5G', brand: 'Vivo', price: 325546, category: 'mobile' },
                       
    );

    if (result.acknowledged) { 
        console.log('data inserted');
    }

}


// insert();