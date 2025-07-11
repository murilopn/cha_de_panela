import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module'; // Importe o seu módulo de produtos
import { Produto } from './produtos/entities/produto.entity'; // Importe a sua entidade
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    // 1. Configuração da conexão principal com o banco de dados
    TypeOrmModule.forRoot({
      type: 'postgres', // O tipo do banco de dados
      host: 'localhost', // O endereço do seu servidor de banco. 'localhost' se estiver na sua máquina.
      port: 5432, // A porta padrão do PostgreSQL
      username: 'postgres', // O usuário que você configurou. 'postgres' é o padrão.
      password: 'arias21', // <<< COLOQUE A SENHA DO SEU BANCO DE DADOS AQUI
      database: 'cha_de_panela', // O nome do banco de dados que você criou
      entities: [Produto], // Lista de todas as entidades que o TypeORM deve conhecer
      synchronize: true, // CUIDADO: Em desenvolvimento, isso atualiza o banco com base nas entidades. Em produção, use migrations.
    }),

    // 2. Importando o módulo de produtos que você criou
    ProdutosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
