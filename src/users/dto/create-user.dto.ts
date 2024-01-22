import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  readonly username!: string;

  @IsString()
  @IsNotEmpty()
  readonly password!: string;
}
