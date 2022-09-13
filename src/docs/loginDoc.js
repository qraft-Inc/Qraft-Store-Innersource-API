module.exports = {
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
            }
          }
        }
      },
  
    }
  },
}
