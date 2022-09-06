import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Unique,  } from 'typeorm';

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column()
  @Unique(['cnpj'])
  cnpj: string;

  @Column()
  data_fundacao: string;

  @Column("decimal", { precision: 5, scale: 2 })
  valor_hora: number;
}