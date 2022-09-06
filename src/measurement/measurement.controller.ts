import { Controller, Post, Body } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { MeasurementDto } from './dto/measurement.dto';

@Controller('calculo')
export class MeasurementController {
  constructor(
    private readonly measurementService: MeasurementService,
  ) {}

  @Post()
  calculate(@Body() measurementDto: MeasurementDto){
    return this.measurementService.calculate(measurementDto);
  }
}
