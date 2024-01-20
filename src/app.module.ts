import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot(
      'mongodb+srv://kan:Kobokan1!@cluster0.ghpngtq.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
