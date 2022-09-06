import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { UpdateHolidayDto } from './dto/update-holiday.dto';
import { Holiday } from './holiday.entity';

@Injectable()
export class HolidayService {
  constructor(
    @InjectRepository(Holiday)
    private readonly holidayRepository: Repository<Holiday>,
  ) {}

  async create(createHolidayDto: CreateHolidayDto) {
    return await this.holidayRepository.create(createHolidayDto).save();
  }

  async findAll() {
    return await Holiday.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} holiday`;
  }

  update(id: number, updateHolidayDto: UpdateHolidayDto) {
    return `This action updates a #${id} holiday`;
  }

  remove(id: number) {
    return `This action removes a #${id} holiday`;
  }
}
