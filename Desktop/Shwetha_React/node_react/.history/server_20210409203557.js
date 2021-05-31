const express = required( 'express' );

const app = express();

app.get('/',(req,res)=>res.sem)

const PORT = process.env.PORT || 5000;

app.lister( PORT, () => console.log( `App is running on port ${ PORT }` ) );