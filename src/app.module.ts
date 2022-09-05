import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { HolidayModule } from './holiday/holiday.module';

@Module({
  imports: [CompanyModule, HolidayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
