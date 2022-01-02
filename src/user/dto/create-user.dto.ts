import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name is required' })
  @IsNotEmpty({ message: 'User Name is required' })
  name: string;

  @IsString({ message: 'Insert a valid Age' })
  @IsNotEmpty({ message: 'User Age is required' })
  age: string;

  @IsString()
  @IsNotEmpty({ message: 'User Email is required' })
  @IsEmail({ message: 'Please insert a valid e-mail' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'User Password is required' })
  @Length(6, 15)
  pass: string;

  @IsString()
  @IsNotEmpty({ message: 'Password Confirmation is required' })
  @Length(6, 15)
  passConfirm: string;
}
