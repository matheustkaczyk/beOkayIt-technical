import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.host,
  port: Number(process.env.port),
  username: process.env.user,
  password: process.env.password,
  database: process.env.database,
  entities: [__dirname + '/../**/*.entity.js'],
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  synchronize: true,
};