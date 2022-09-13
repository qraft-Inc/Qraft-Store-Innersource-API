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
                }
              }
            }
          },
  
        }
      },
    },
}
