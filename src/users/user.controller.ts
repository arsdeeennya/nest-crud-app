import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/schemas/user.schema';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get(':username')
  // @UseGuards(AuthGuard('jwt'))
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }
  @Post()
  signUp(@Body(ValidationPipe) createUser: CreateUserDto): Promise<User> {
    return this.usersService.create(createUser);
  }
}
