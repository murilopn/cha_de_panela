import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ type: 'numeric' })
  preco: number;

  @Column()
  url_imagem: string;

  @Column({ default: true })
  disponivel: boolean;
}
