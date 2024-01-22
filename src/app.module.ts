import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ItemsModule,
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://kan:Kobokan1!@cluster0.ghpngtq.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
