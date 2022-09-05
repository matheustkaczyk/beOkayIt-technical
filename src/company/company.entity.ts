import { BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

export class CompanyEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column()
  cnpj: string;

  @Column()
  data_fundacao: string;

  @Column()
  valor_hora: number;
}