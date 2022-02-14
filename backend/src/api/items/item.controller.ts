import { Controller, Get } from '@nestjs/common';
import { ItemDTO } from './dto/item.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private serv: ItemService) { }

  @Get()
  public async getAll(): Promise<ItemDTO[]> {
    return await this.serv.getAll();
  }
}