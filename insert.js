const dbconnection = require('./mongodb');


const insert = async () => {
    const db = await dbconnection();
    const result = await db.insertMany(
        [
              { name: 'vivo T1 4G', brand: 'Vivo', price: 2334, category: 'mobile' },
        { name: 'vivo T1 5G', brand: 'Vivo', price: 325546, category: 'mobile' },
        { name: 'vivo T1 6G', brand: 'Vivo', price: 4645, category: 'mobile' },
        { name: 'vivo T1 7G', brand: 'Vivo', price: 43645, category: 'mobile' },
        { name: 'vivo T1 8G', brand: 'Vivo', price: 22222, category: 'mobile'  },
    ]
                       
    );

    if (result.acknowledged) { 
        console.log('data inserted');
    }

}


// insert();