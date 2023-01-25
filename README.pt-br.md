# @cjr-unb/nestjs-crud-generator

> Este gerador foi inicializado usando [create-prisma-generator](https://github.com/YassinEldeeb/create-prisma-generator)

Um gerador prisma de CRUD para NestJS. 

# Instalação
É necessário ter instalado o prisma e executado pelo menos uma migração. Feito isso, instale o pacote:
```
npm i @cjr-unb/nestjs-crud-generator
```

# Como usar
Adicione o seguinte trecho no inicio do seu arquivo schema.prisma
```prisma
generator crud_generator {
  provider = "prisma-generator-nestjs-crud"
  output   = "../src"
}
```
No campo provider, escreva "prisma-generator-nestjs-crud". Em output, coloque o caminho para a pasta src.

Caso os arquivos já existam, eles não serão sobrescritos.

Execute o comando
```
npx prisma generate
```
E pronto!

Os services gerados utilizam a biblioteca @cjr-unb/super-crud para implementar o CRUD. Você pode encontrar mais informações [aqui](https://github.com/CJR-UnB/nestjs-prisma-super-crud/blob/main/README.pt-br.md)