const { Pool } = require('pg'); 
const connectionString = 'postgresql://postgres:root@localhost:5432/familyBudget'

const db = new Pool({
    connectionString: connectionString
}); 

module.exports = db;