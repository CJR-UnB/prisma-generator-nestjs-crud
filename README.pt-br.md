# @cjr-unb/nestjs-service

> Este gerador foi inicializado usando [create-prisma-generator](https://github.com/YassinEldeeb/create-prisma-generator)

Um gerador prisma de CRUD para NestJS. 

# Instalação
É necessário ter instalado o prisma e executado pelo menos uma migração. Feito isso, instale o pacote:
```
npm i @cjr-unb/nestjs-crud-generator
```

# Como usar
Adicione o seguinte trecho no inicio do seu arquivo prisma.schema
```prisma
generator service_generator {
  provider = "prisma-generator-nestjs-crud"
  output   = "../src"
}
```
No campo provider, escreva "prisma-generator-nestjs-service". Em output, coloque o caminho para a pasta src.

O diretório src deve conter diretórios nomeados com o nome da sua model em kebab-case. Esses serão os locais onde os services serão gerados.

Caso a pasta não exista ou o arquivo de service já existir, nenhum arquivo será gerado.

Execute o comando
```
npx prisma generate
```
E pronto!

Os services gerados utilizam a biblioteca @cjr-unb/super-crud para implementar o CRUD. Você pode encontrar mais informações [aqui](https://github.com/CJR-UnB/nestjs-prisma-super-crud/blob/main/README.pt-br.md)