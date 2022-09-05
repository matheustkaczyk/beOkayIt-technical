import { IsNotEmpty, IsString, Matches, IsNumber } from "class-validator";

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
  data_fundacao: Date;

  @IsNotEmpty()
  @IsNumber()
  valor_hora: number;
}
