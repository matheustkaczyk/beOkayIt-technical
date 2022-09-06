import { Injectable } from '@nestjs/common';
import { MeasurementDto } from './dto/measurement.dto';

@Injectable()
export class MeasurementService {
  async calculate(measurementDto: MeasurementDto) {
    return 'Hello World!';
  }
}
