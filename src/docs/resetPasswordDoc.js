module.exports = { 
'/api/auth/reset-password/{userId}/{token}': {
    patch: {
      tags: ['Auth'],
      summary: 'Reset Password',
      parameters: [{
        name: "userId",
        in: "path",
        required : true,
        description : "user id",
        schema: {
          type: "string",
        },
        
    },{
      name: "token",
      in: "path",
      required : true,
      description : "token",
      schema: {
        type: "string",
      },
      
  }],
      requestBody: {
        content: {
          'application/json': {
            example: {
              "password":"Prud@5634nces",
              "confirmPassword":"Prud@5634nces"
              
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
  