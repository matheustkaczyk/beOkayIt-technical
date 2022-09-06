import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return await this.companyRepository.create(createCompanyDto).save();
  }

  async findAll() {
    return await this.companyRepository.find();
  }

  async findOne(id: number) {
    return await this.companyRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return await this.companyRepository.update(id, updateCompanyDto);
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
