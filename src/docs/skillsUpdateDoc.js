module.exports = { 
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
            example: {
                "Portofolio":"https://qraftaietf.com/",
                "Niche":"Artist",
                "Social_media":"Instagram",
                "Band_membership":"Kareoke",
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
