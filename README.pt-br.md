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
No campo provider, escreva "prisma-generator-nestjs-crud". Em output, coloque o caminho do diretório onde você quer que os arquivos sejam gerados

Execute o comando
```
npx prisma generate
```
E pronto! Os arquivos começarão a ser gerados, mas se já existirem, não serão sobrescritos. Agora basta importar os módulos gerados em seu app.module

Os services gerados utilizam a biblioteca @cjr-unb/super-crud para implementar o CRUD. Você pode encontrar mais informações [aqui](https://github.com/CJR-UnB/nestjs-prisma-super-crud/blob/main/README.pt-br.md)