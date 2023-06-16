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

db.getCollection('ballModels').insertMany(
    [
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "couro",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "plástico",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "borracha",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 49,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "cerâmica",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "vidro",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "madeira",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 79,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "eva",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 49,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "couro",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 129,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "plástico",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "borracha",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "cerâmica",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "vidro",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 139,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "madeira",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "eva",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 59,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "couro",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 129,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "plástico",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "borracha",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "cerâmica",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 159,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "vidro",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 239,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "madeira",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 139,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "futebol",
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de futebol",
            "material": "eva",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=futebol"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "couro",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "plástico",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "borracha",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 49,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "cerâmica",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "vidro",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "madeira",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 79,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "eva",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 49,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "couro",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 129,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "plástico",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "borracha",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "cerâmica",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "vidro",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 139,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "madeira",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "eva",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 59,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "couro",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 129,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "plástico",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "borracha",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "cerâmica",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 159,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "vidro",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 239,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "madeira",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 139,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "basquete"
                "brand": "angemessen"
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "name": "Bola de basquete",
            "material": "eva",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=basquete"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "plástico",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "cerâmica",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "borracha",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 49,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "eva",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 49,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "couro",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "vidro",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "madeira",
            "size": "pequeno",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 79,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "plástico",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "cerâmica",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "borracha",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "eva",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 59,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "couro",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 129,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "vidro",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 139,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "madeira",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "plástico",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "cerâmica",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 159,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "borracha",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "eva",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "couro",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 129,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "vidro",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 239,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "volei",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "madeira",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 239,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=volei"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "couro",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 129,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "plástico",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "borracha",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "cerâmica",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "vidro",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 139,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "madeira",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "eva",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 59,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "couro",
            "size": "médio",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 129,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "plástico",
            "size": "médio",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "borracha",
            "size": "médio",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "cerâmica",
            "size": "médio",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 119,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "vidro",
            "size": "médio",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 159,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "madeira",
            "size": "médio",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 129,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "eva",
            "size": "médio",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 69,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "couro",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 129,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "plástico",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "borracha",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "cerâmica",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 159,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "vidro",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 239,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "madeira",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 139,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "golfe",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "eva",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=golfe"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "cerâmica",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "vidro",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 139,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "couro",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 129,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "plástico",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "madeira",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 9
                }
            }0
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "eva",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 59,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "borracha",
            "size": "padrão",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "cerâmica",
            "size": "médio",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 119,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "vidro",
            "size": "médio",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 159,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "couro",
            "size": "médio",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 129,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "plástico",
            "size": "médio",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "madeira",
            "size": "médio",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 129,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "eva",
            "size": "médio",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 69,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "borracha",
            "size": "médio",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "cerâmica",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 159,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "vidro",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 239,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "couro",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 129,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "plástico",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 39,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "madeira",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 139,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "eva",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 99,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        },
        {
            "sport": "bocha",
            "brand": "angemessen"
 
            "description": { type: String, required: true },           "name,
            "material": "borracha",
            "size": "grande",
            "price": {
                "sign": "R$",
                "abcde": {
                    "int": 89,
                    "cent": 90
                }
            },
            "avaliation": 4,
            "image": "/api/images?ball_type=bocha"
        }
    ]
)

// Insert a few documents into the BALLS collection.
// db.getCollection('ballmodels').insertMany([
//     {
//         "type": "Mano",
//         "material": "couro",
//         "brand": ""angemessen"",
//         "sport": "futeb129.
    "brand": "angemessen"
            "description": { type: ,
//         "size": "",
//         "price": {
    "sign": "R$",
    "abcde": {
        "int": 0,
 01        "cent":
    ,
"avaliation": 4,
//         "image": "/api/images?ball_type=random"
//     },
//     {
//         "type": "Ball is Quete",
//         "material": "couro",
//         "brand": ""angemessen"",
//         "sport": "basqu129.
                "brand": "angemessen"
            "description": { type: ,
//         "size": "",
//         "price": {
    "sign": "R$",
    "abcde": {
        "int": 23, 51
        "cent":
    ,
"avaliation": 4,
//         "image": "/api/images?ball_type=random"
//     },
//     {
//         "type": "Bola de Ed. Física",
//         "material": "plástico",
//         "brand": ""angemessen"",
//         "sport": "volei39.9
                "brand": "angemessen"
            "description": { ,
//         "size": "",
//         "price": {
    "sign": "R$",
    "abcde": {
        "int": 15, 01
        "cent":
    ,
"avaliation": 4,
//         "image": "/api/images?ball_type=random"
//     },
//     {
//         "type": "Bola de Golfe Grande",
//         "material": "plástico",
//         "brand": ""angemessen"",
//         "sport": "golfe39.9
                "brand": "angemessen"
            "description": { ,
//         "size": "",
//         "price": {
    "sign": "R$",
    "abcde": {
        "int": 40, 23
        "cent":
    ,
"avaliation": 4,
//         "image": "/api/images?ball_type=random"
//     },
//     {
//         "type": "El Bocha",
//         "material": "cerâmica",
//         "brand": ""angemessen"",
//         "sport": "bocha",
/   "brand": "angemessen"

            "description": { type: String, required: ,
//         "price": {
    "sign": "R$",
    "abcde": {
        "int": 130 88,
        "cent":
    ,
"avaliation": 4,
//         "image": "/api/images?ball_type=random"
//     }
// ]);

console.log(JSON.stringify(db.getCollection("ballmodels").find({ })));