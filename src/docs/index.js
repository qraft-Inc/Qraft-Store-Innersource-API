import bio from "./bioUpateDoc";
import forgetPassword from "./forgetPasswordDoc";
import loginDoc from "./loginDoc";
import registerDoc from "./registerDoc";
import profileDoc from "./profileDoc";
import skillsDoc from "./skillsUpdateDoc";
import resetPasswordDoc from "./resetPasswordDoc";
const paths = {
  ...profileDoc,
  ...forgetPassword,
  ...resetPasswordDoc,
  ...loginDoc,
  ...registerDoc,
  ...skillsDoc,
  ...bio
}

module.exports = {

  paths: {
    ...paths
  },

  components: {
    securitySchemes: {
      ApiKey: {
        type: 'apiKey',
        in: 'header',
        name: 'token'

      }

    },
  },

  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'Qraft-Store - Documentation',
    description: 'Description of my API her',
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
      url: 'https://qraft-store-api.herokuapp.com/',
      description: 'Production Server',
    },
  ],
  tags: [
    {
      name: 'Auth',
    },

    {
      name: 'Profile',
    },
  ],

};
