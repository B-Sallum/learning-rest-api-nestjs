import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Length(2)
  name: string;

  @IsOptional()
  @IsEmail()
  @IsNotEmpty()
  @Length(2)
  email: string;
}
