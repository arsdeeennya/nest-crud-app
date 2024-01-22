import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { UserStatus } from 'src/users/user-status.enum';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel({
      username: user.username,
      password: await bcrypt.hash(user.password, 12),
      status: UserStatus.FREE,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return createdUser.save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(username: string) {
    const user = await this.userModel.findOne({ username }).exec();
    if (!user) {
      throw new NotFoundException('Could not find user');
    }
    return user;
  }
}
