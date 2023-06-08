/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('TESTE');

// Insert a few documents into the BALLS collection.
db.getCollection('ballmodels').insertMany([
    {
        "type": "Mano",
        "material": "couro",
        "brand": "angemessen",
        "sport": "futebol",
        "size": "",
        "price": 0.01,
        "image": "/api/images?ball_type=random"
    },
    {
        "type": "Ball is Quete",
        "material": "couro",
        "brand": "angemessen",
        "sport": "basquete",
        "size": "",
        "price": 23.51,
        "image": "/api/images?ball_type=random"
    },
    {
        "type": "Bola de Ed. Física",
        "material": "plástico",
        "brand": "angemessen",
        "sport": "volei",
        "size": "",
        "price": 15.01,
        "image": "/api/images?ball_type=random"
    },
    {
        "type": "Bola de Golfe Grande",
        "material": "plástico",
        "brand": "angemessen",
        "sport": "golfe",
        "size": "",
        "price": 40.23,
        "image": "/api/images?ball_type=random"
    },
    {
        "type": "El Bocha",
        "material": "cerâmica",
        "brand": "angemessen",
        "sport": "bocha",
        "size": "",
        "price": 130.88,
        "image": "/api/images?ball_type=random"
    }
]);
