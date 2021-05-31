const express = required( 'express' );

const app = express();

app

const PORT = process.env.PORT || 5000;

app.lister( PORT, () => console.log( `App is running on port ${ PORT }` ) );