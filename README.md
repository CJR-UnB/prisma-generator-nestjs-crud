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
Add the following snippet at the beginning of your schema.prisma file:
```prisma
generator crud_generator {
  provider = "prisma-generator-nestjs-crud"
  output   = "../src"
}
```
In the provider field, write "prisma-generator-nestjs-crud". In output, put the path of the directory where you want the files to be generated.

Run the command
```
npx prisma generate
```
That's it! The files will start to be generated, but if they already exist, they will not be overwritten. Now just import the generated modules in your app.module


The generated services use the @cjr-unb/super-crud library to implement CRUD. You can find more information [here](https://github.com/CJR-UnB/nestjs-prisma-super-crud#readme).