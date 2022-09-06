import { IsNotEmpty, Matches,  } from "class-validator";

const DATE_REGEX = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

export class CreateHolidayDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @Matches(DATE_REGEX, { message: "Data inválida" })
  data: string;
}
