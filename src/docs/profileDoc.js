module.exports = {
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
}
