import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { MeasurementDto } from './dto/measurement.dto';

@Controller('calculo')
export class MeasurementController {
  constructor(
    private readonly measurementService: MeasurementService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  calculate(@Body() measurementDto: MeasurementDto){
    return this.measurementService.calculate(measurementDto);
  }
}
