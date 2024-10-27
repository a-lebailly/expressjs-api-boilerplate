const fs = require('fs');
const path = require('path');

const baseSchemaPath = path.join(__dirname, 'baseSchema.prisma');
const modelsDir = path.join(__dirname, 'models');
const schemaPath = path.join(__dirname, 'schema.prisma');

const baseSchemaContent = fs.readFileSync(baseSchemaPath, 'utf-8');

const modelFiles = fs.readdirSync(modelsDir);
const modelContents = modelFiles
  .filter((file) => file.endsWith('.prisma'))
  .map((file) => fs.readFileSync(path.join(modelsDir, file), 'utf-8'))
  .join('\n\n');

const finalSchemaContent = `${baseSchemaContent}\n${modelContents}`;

fs.writeFileSync(schemaPath, finalSchemaContent);
console.log('schema.prisma generated successfully!');
