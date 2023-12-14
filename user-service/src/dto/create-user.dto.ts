import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly userName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly email: string;
}
