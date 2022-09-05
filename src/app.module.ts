import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { HolidayModule } from './holiday/holiday.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CompanyModule,
    HolidayModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.host,
      port: Number(process.env.port),
      username: process.env.user,
      password: process.env.password,
      database: process.env.database,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
