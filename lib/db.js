//setup low db 
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

//export default function getDB() {

//set up lowdb database
const adapter = new FileSync('lowdb.json');
const db = low(adapter);
// Set some defaults (required if your JSON file is empty)
db.defaults({ twitter:[], instagram: []}).write();


//return db;

export default db;


