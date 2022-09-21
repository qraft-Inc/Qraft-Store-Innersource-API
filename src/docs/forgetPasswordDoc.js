module.exports = { 
'/api/auth/forgot-password': {
    post: {
      tags: ['Auth'],
      summary: 'Forget password ',
      parameters: [],
      requestBody: {
        content: {
          'application/json': {
            example: {
              "email": "prude@gmail.com",
              
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
  }
}
