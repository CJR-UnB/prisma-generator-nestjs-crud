[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/CJR-UnB/prisma-generator-nestjs-crud/blob/dev/README.pt-br.md)

# @cjr-unb/nestjs-crud-generator

> This generator was bootstraped using [create-prisma-generator](https://github.com/YassinEldeeb/create-prisma-generator)

A CRUD prisma generator for NestJS

# Installation
It is necessary to have Prisma installed and at least one migration executed. After that, install the package:
```
npm i @cjr-unb/nestjs-crud-generator
```
# How to Use
Add the following snippet at the beginning of your prisma.schema file:
```prisma
generator crud_generator {
  provider = "prisma-generator-nestjs-crud"
  output   = "../src"
}
```
In the provider field, write "prisma-generator-nestjs-service". In output, put the path to the src folder.

The src directory should contain directories named with your model's name in kebab-case. These will be the locations where the services will be generated.

If the folder does not exist or the service file already exists, no file will be generated.

Run the command
```
npx prisma generate
```
And you're done!

The generated services use the @cjr-unb/super-crud library to implement CRUD. You can find more information [here](https://github.com/CJR-UnB/nestjs-prisma-super-crud#readme).