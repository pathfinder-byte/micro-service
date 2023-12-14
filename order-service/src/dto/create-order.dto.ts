import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateOrderDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly orderNo: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly bankName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly itemName: string;

  @IsNumber()
  @IsNotEmpty()
  readonly total: number;
}
