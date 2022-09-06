import { Connection } from "typeorm";
import { Seeder, Factory } from "typeorm-seeding";
import { Holiday } from '../../holiday/holiday.entity';
import { holidays } from "../holiday-infos";

export class CreateHolidaysSeed implements Seeder {
  public async run(_factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Holiday)
      .values(holidays)
      .execute();
  }
}