import { ItemStatus } from '../item-status.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  status: ItemStatus;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
