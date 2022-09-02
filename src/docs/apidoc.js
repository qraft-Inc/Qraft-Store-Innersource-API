
const apiDocumentation = {
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
  paths: {
    '/api/auth/login': {
      get: {
        tags: ['Login'],
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
      name: 'Login',
    },
    {
      name: 'Profile',
    },
  ],
};


export { apiDocumentation };