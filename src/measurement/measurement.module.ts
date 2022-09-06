import { Module } from '@nestjs/common';
import { CompanyModule } from 'src/company/company.module';
import { HolidayModule } from 'src/holiday/holiday.module';
import { MeasurementController } from './measurement.controller';
import { MeasurementService } from './measurement.service';

@Module({
  controllers: [MeasurementController],
  providers: [MeasurementService],
  imports: [HolidayModule, CompanyModule]
})
export class MeasurementModule {}
