import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

  @Patch(':id')
  updateDisponibilidade(
    @Param('id') id: string,
    @Body() body: { disponivel: boolean },
  ) {
    return this.produtosService.updateDisponibilidade(
      Number(id),
      body.disponivel,
    );
  }
}
