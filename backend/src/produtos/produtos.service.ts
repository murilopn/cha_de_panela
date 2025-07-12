import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtosRepository: Repository<Produto>,
  ) {}

  findAll(): Promise<Produto[]> {
    return this.produtosRepository.find();
  }

  async updateDisponibilidade(id: number, disponivel: boolean) {
    // const produtoToUpdate = await this.produtosRepository.findOneBy({ id });

    // if (!produtoToUpdate) {
    //   throw new Error(`Produto com ID ${id} não encontrado.`);
    // }

    // produtoToUpdate.disponivel = disponivel;
    // return await this.produtosRepository.save(produtoToUpdate);
    return;
  }
}
