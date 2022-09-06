import { Injectable } from '@nestjs/common';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { UpdateHolidayDto } from './dto/update-holiday.dto';
import { Holiday } from './holiday.entity';

@Injectable()
export class HolidayService {
  async create(createHolidayDto: CreateHolidayDto) {
    return await Holiday.create(createHolidayDto).save();
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
