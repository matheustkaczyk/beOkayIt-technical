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

  async findOne(id: number) {
    return await this.holidayRepository.findOne({ where: { id } });
  }

  async update(id: number, updateHolidayDto: UpdateHolidayDto) {
    return await this.holidayRepository.update(id, updateHolidayDto);
  }

  async remove(id: number) {
    return await this.holidayRepository.delete(id);
  }
}
