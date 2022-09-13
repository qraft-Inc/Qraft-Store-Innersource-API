const bio = {

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
            example: {
                "userName": "PrudenceAhimbisibwe",
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
            }
          }
        }
      },
  
    }
  },
}

export default bio;
