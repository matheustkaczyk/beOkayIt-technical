import { IsNotEmpty, IsString, Matches, IsNumberString, Min } from "class-validator";

const CNPJ_REGEX = /^\d{2}\d{3}\d{3}\d{4}\d{2}$/;
const DATE_REGEX = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
const VALUE_REGEX = /^[0-9]*(\.[0-9]{0,2})?$/

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  @Matches(CNPJ_REGEX, { message: 'CNPJ inválido' })
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  @Matches(DATE_REGEX, { message: "Formato de data inválido" })
  data_fundacao: string;

  @IsNotEmpty()
  @Matches(VALUE_REGEX, { message: "Valor deve ser positivo com até duas casas decimais" })
  valor_hora: number;
}
