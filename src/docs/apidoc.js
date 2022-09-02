module.exports = {
  paths: {
    '/api/auth/register': {
      post: {
        tags: ['Auth'],
        summary: 'Register new user',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '##/components/schemas/User'
              },
              example: {
                "userName": "Prudence Ahimbisibwe",
                "email": "prude@gmail.com",
                "password": "Orpotpeiou#toe57rut",
                "Role": "client"
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'The list of the blogs',
            content: {
              'application/json': {
                schema: {
                  $ref: '##/components/schemas/Blog'
                },

              }
            }
          }
        },

      }
    },
// registration end here
// login start here
'/api/auth/login': {
  get: {
    tags: ['Auth'],
    summary: 'User logged in',
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '##/components/schemas/User'
          },
          example: {
            "email": "prude@gmail.com",
            "password": "Orpotpeiou#toe57rut",
            
          }
        }
      }
    },
    responses: {
      '200': {
        description: 'The list of the blogs',
        content: {
          'application/json': {
            schema: {
              $ref: '##/components/schemas/Blog'
            },

          }
        }
      }
    },

  }
},
// end of login section
'/api/profile/account': {
  post: {
    tags: ['Profile'],
    summary: 'create a new profile',
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '##/components/schemas/User'
          },
          example: {
              "email":"prude@gmail.com",
              "gender":"female",
              "dob":"28/07/2002",
              "price_range":"5000-1000",
              "profession":"Singing",
              "location":"Kirehe",
              // "Portofolio":"https://qraftaietf.com/",
              "Niche":"Artist",
              "Social_media":"Instagram",
              "Band_membership":"Kareoke"
          }
        }
      }
    },
    responses: {
      '200': {
        description: 'The list of the blogs',
        content: {
          'application/json': {
            schema: {
              $ref: '##/components/schemas/Blog'
            },

          }
        }
      }
    },

  }
},
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  
    
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'Qraft-Store - Documentation',
    description: 'Description of my API here',
    contact: {
      name: 'Qraft store development',
      email: 'qraft@example.com',
      url: 'https://www.qraftacademy.com/',
    },
   
  },
  servers: [
    {
      url: 'http://localhost:3000/',
      description: 'Local Server',
    },
    { 
      url:  'https://qraft-store-api.herokuapp.com/',
      description: 'Production Server',
    },
  ],
  tags: [
    {
      name: 'Auth',
    },
    
    {
      name: 'Profile',
    },
  ],
};

