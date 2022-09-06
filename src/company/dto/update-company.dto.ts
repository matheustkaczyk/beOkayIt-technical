import { IsNotEmpty, IsString, Matches } from "class-validator";

const VALUE_REGEX = /^[0-9]*(\.[0-9]{0,2})?$/

export class UpdateCompanyDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @Matches(VALUE_REGEX, { message: "Valor deve ser positivo com até duas casas decimais" })
  valor_hora: number;
}
