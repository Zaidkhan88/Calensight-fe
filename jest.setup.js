import { TextEncoder, TextDecoder } from 'node:util'

if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder
}

if (!global.TextDecoder) {
  global.TextDecoder = TextDecoder
}

require('dotenv').config({
  path: '.env.test',
});

// Realizar el mock completo de las variables de entorno
jest.mock('./src/helpers/getEnvVariables', () => ({
  getEnvVariables: () => ({ ...process.env }),
}));
