import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { HolidayModule } from './holiday/holiday.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/typeorm.config';
import { MeasurementModule } from './measurement/measurement.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CompanyModule,
    HolidayModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    MeasurementModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
