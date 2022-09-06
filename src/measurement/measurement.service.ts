import { Injectable } from '@nestjs/common';
import { MeasurementDto } from './dto/measurement.dto';
import { Holiday } from '../holiday/holiday.entity';
import { Company } from 'src/company/company.entity';

@Injectable()
export class MeasurementService {
  async calculate(measurementDto: MeasurementDto) {
    const { cnpj, data_inicio, data_fim } = measurementDto;

    const data_inicio_split = data_inicio.split('-');
    const data_fim_split = data_fim.split('-');
    const holiday_list = await Holiday.find();
    const holidayDates = holiday_list.map((holiday) => holiday.data);
    const company = await Company.findOne({ where: { cnpj } });
    const workingHours = 8;

    if (!company) {
      return {
        message: 'Empresa não encontrada',
      };
    }

    const data_inicio_date = new Date(
      parseInt(data_inicio_split[0]),
      parseInt(data_inicio_split[1]),
      parseInt(data_inicio_split[2]),
    );

    const data_fim_date = new Date(
      parseInt(data_fim_split[0]),
      parseInt(data_fim_split[1]),
      parseInt(data_fim_split[2]),
    );

    if (data_inicio_date < data_fim_date) {
      const weekends = () => {
        let count = 0;
        let currentDate = data_inicio_date;
        currentDate.setDate(currentDate.getMonth() - 1);
  
        while (currentDate <= data_fim_date) {
          const weekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
  
          if (weekend)
          {
            count++;
          }
          
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
      }
      return count;
      }

      const holidays = () => {
        let count = 0;
        let currentDate = data_inicio_date;

        while (currentDate <= data_fim_date) {
          const day = currentDate.getDate();
          const month = currentDate.getMonth();
          const year = currentDate.getFullYear();

          const holiday = holidayDates.filter(
            (holiday) =>
              parseInt(holiday.split('-')[0]) === day &&
              parseInt(holiday.split('-')[1]) === month &&
              parseInt(holiday.split('-')[2]) === year,
          );

          if (holiday.length > 0) {
            for (let item of holiday) {
              const splittedDate = item.split('-');
              const holidayDate = new Date(
                parseInt(splittedDate[2]),
                parseInt(splittedDate[1]),
                parseInt(splittedDate[0]),
              );

              if (holidayDate.getDay() !== 0 && holidayDate.getDay() !== 6) {
                count++;
              }
            }
          }

          currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
        }

        return count;
      };
  
      const diffTime = Math.abs(data_fim_date.getTime() - data_inicio_date.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
      return {
        valor_calculado: ((diffDays - weekends() - holidays()) * workingHours) * company.valor_hora,
      }

      } else {
        return {
          message: 'Data de início deve ser menor que a data final',
      };
    }
  }
}
