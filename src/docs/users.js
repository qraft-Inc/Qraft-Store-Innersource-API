const createUser = {
    tags: ['Auth'],
    description: 'Create a new user in the system',
    operationId: 'createUser',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/createUserBody',
          },
        },
      },
      required: true,
    },
    responses: {
      '201': {
        description: 'User created successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                },
                fullName: {
                  type: 'string',
                  example: 'Prudence Ahimbisibwe',
                },
                email: {
                  type: 'string',
                  example: 'prude.ahimbisibwe@email.com',
                },
                password: {
                  type: 'string',
                },
                enabled: {
                  type: 'boolean',
                  example: true,
                },
                role: {
                  type: 'string',
                },
                createdAt: {
                  type: 'string',
                },
                updatedAt: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      '500': {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Internal Server Error',
                },
              },
            },
          },
        },
      },
    },
  };
  
  const createUserBody = {
    type: 'object',
    properties: {
      fullName: {
        type: 'string',
        example: 'Prudence Ahimbisibwe',
      },
      email: {
        type: 'string',
        example: 'prude.ahimbisibwe@email.com',
      },
      password: {
        type: 'string',
        description: "unencrypted user's password",
        example: '!1234aWe1Ro3$#',
      },
      enabled: {
        type: 'boolean',
        example: true,
      },
      role: {
        type: 'string',
        example: '605636683f6e29c81c8b2db0',
      },
    },
  };
  const deleteUser = {
    tags: ['Users'],
    description: 'Delete a user',
    operationId: 'deleteUser',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'User ID',
        required: true,
        type: 'string',
      },
    ],
    responses: {
      '200': {
        description: 'User deleted successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'User deleted successfully!',
                },
              },
            },
          },
        },
      },
      '500': {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Internal Server Error',
                },
              },
            },
          },
        },
      },
    },
  };
  
  export { createUser, createUserBody };