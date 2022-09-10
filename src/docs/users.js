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
  // endof auth section
// creating user profile section
   ['Profile'],{ 
    description: 'Create a user profile in the system',
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
        description: 'Profile created successfully!',
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
   }
  //  updateing the profile
   ['Update Profile'],{ 
    description: 'Update a user profile in the system',
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
        description: 'Profile updated successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                },
                gender: {
                  type: 'string',
                  example: 'Female',
                },
                dob: {
                  type: 'string',
                  example: '12/6/1998',
                },
                price_Range: {
                  type: 'string',
                  example: '5000-1000',
                },
                enabled: {
                  type: 'boolean',
                  example: true,
                },
                profession: {
                  type: 'string',
                  example:'Singing',
                
              },
              location: {
                type: 'string',
                example:'Kelere',
              
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
   }
  }
// updating user's bio information
  ['Biography_update'],{ 
    description: 'Update a user bio information in the system',
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
        description: 'Bio information updated successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                },
                firstName: {
                  type: 'string',
                  example: 'Ahimbisibwe',
                },
                lastName: {
                  type: 'string',
                  example: 'Ahimbisibwe',
                },
                email: {
                  type: 'string',
                  example: 'prude@gmail.com',
                },
                phone: {
                  type: 'string',
                  example: '0784017930',
                },
                enabled: {
                  type: 'boolean',
                  example: true,
            
              location: {
                type: 'string',
                example:'Kelere',
              
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
   }
  }
}
// updating user skills
['Skills_Update'],{ 
  description: 'Update a user bio information in the system',
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
      description: 'Bio information updated successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
              },
              porfolio: {
                type: 'string',
                example: 'Ahimbisibwe',
              },
              Niche: {
                type: 'string',
                example: 'Ahimbisibwe',
              },
              socila_media: {
                type: 'string',
                example: 'prude@gmail.com',
              },
              band_membership: {
                type: 'string',
                example: '0784017930',
              },
              enabled: {
                type: 'boolean',
                example: true,
          
            location: {
              type: 'string',
              example:'Kelere',
            
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
 }
}
}
  
  
  
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

  export { createUser, createUserBody };
  