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
  post: {
    tags: ['Auth'],
    security: [
      {
        ApiKey: []
      }
    ],
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
// updating the user profile

'/api/user/profile/update': {
  patch: {
    tags: ['Profile'],
    security: [
      {
        ApiKey: []
      }
    ],
    summary: 'update profile',
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '##/components/schemas/User'
          },
          example: {
              "gender":"female",
              "dob":"28/07/2002",
              "price_range":"5000-1000",
              "profession":"Singing",
              "location":"Kirehe",
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
// updating user bio-information
'/api/user/biograph/update': {
  patch: {
    tags: ['Profile'],
    security: [
      {
        ApiKey: []
      }
    ],
    summary: 'update biography',
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '##/components/schemas/User'
          },
          example: {
              "firstName":"Ahimbisibwe",
              "lastName":"Liliane",
              "email":"prude@gmail.com",
              "phone":"Singing",
              "location":"Kirehe",
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
// updating user skills
'/api/user/skills/update': {
  patch: {
    tags: ['Profile'],
    security: [
      {
        ApiKey: []
      }
    ],
    summary: 'update_skills',
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '##/components/schemas/User'
          },
          example: {
              "portfolio":"https://qraftaietf.com/",
              "Niche":"Artist",
              "social-media":"Instagram",
              "band-membership":"Kareoke",
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
  },
  
    components: {
      securitySchemes: {
        ApiKey: {
          type: 'apiKey',
          in: 'header',
          name: 'token' 
   
      }

    },
  },
  

    
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'Qraft-Store - Documentation',
    description: 'Description of my API her',
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
