import { IsNotEmpty, IsString, Matches, IsNumber } from "class-validator";

const CNPJ_REGEX = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
const DATE_REGEX = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  @Matches(CNPJ_REGEX)
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  @Matches(DATE_REGEX)
  data_fundacao: Date;

  @IsNotEmpty()
  @IsNumber()
  valor_hora: number;
}
