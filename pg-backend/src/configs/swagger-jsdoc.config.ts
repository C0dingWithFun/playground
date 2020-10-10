export const swaggerJSDocConfig = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Playground | Coding with Fun',
      version: '1.0.0',
      description:
        'Stream Plaground kit of all the tools that I have created for my live coding streams!',
      license: {
        name: 'MIT',
        url: 'https://choosealicense.com/licenses/mit/',
      },
      contact: {
        name: 'Coding With Fun',
        url: 'https://youtube.codingwith.fun',
        email: 'admin@codingwith.fun',
      },
    },
    servers: [
      {
        url: 'http://localhost:9000/api/v1',
      },
    ],
  },
  apis: [
    'src/api/**/*.ts',
  ],
};

export default {
  swaggerJSDocConfig,
};
