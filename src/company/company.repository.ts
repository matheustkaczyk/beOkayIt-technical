import { Repository, EntityRepository } from 'typeorm';
import { CompanyEntity } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';

@EntityRepository(CompanyEntity)
export class CompanyRepository extends Repository<CompanyEntity> {
  async createCompany(createCompanyDto: CreateCompanyDto) {
    const { nome, cnpj, data_fundacao, valor_hora } = createCompanyDto;

    const company = new CompanyEntity();
    company.nome = nome;
    company.cnpj = cnpj;
    company.data_fundacao = data_fundacao;
    company.valor_hora = valor_hora;

    await company.save();
  }
}