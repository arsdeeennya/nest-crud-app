import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './schemas/item.schema';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id') // /items/id
  findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() CreateItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.create(CreateItemDto);
  }

  @Patch(':id')
  updateStatus(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return this.itemService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): void {
    this.itemService.delete(id);
  }
}
