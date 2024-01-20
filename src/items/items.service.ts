import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { CreateItemDto } from './dto/create-item.dto';
import { v4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './schemas/item.schema';

@Injectable() // nest knows that this class is provider
export class ItemsService {
  constructor(
    @InjectModel(Item.name) private readonly itemModel: Model<ItemDocument>,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    const item = await this.itemModel.findOne({ id }).exec();
    if (!item) throw new NotFoundException('could not find item');
    return item;
  }

  async create(CreateItemDto: CreateItemDto): Promise<Item> {
    const createdUser = new this.itemModel({
      id: v4(),
      name: CreateItemDto.name,
      price: CreateItemDto.price,
      description: CreateItemDto.description,
      status: ItemStatus.ON_SALE,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return createdUser.save();
  }

  async updateStatus(id: string): Promise<Item> {
    const item = await this.itemModel.findOne({ id }).exec();
    if (!item) throw new NotFoundException('could not find item');
    item.status = ItemStatus.SOLD_OUT;
    return item.save();
  }

  async delete(id: string): Promise<void> {
    await this.itemModel.deleteOne({ id }).exec();
  }
}
