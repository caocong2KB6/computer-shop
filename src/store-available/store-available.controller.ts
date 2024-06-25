import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StoreAvailableService } from './store-available.service';
import { StoreAvailable } from 'src/entity/store-available';
import { CreateStoreAvailableDto } from './dto/create-store-available.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('storeAvailables')
@Controller('storeAvailables')
export class StoreAvailableController {
  constructor(private readonly storeAvailablesService: StoreAvailableService) {}

  @Get()
  async findAll(): Promise<StoreAvailable[]> {
    return this.storeAvailablesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StoreAvailable> {
    return this.storeAvailablesService.findOne(id);
  }

  @Post()
  async create(@Body() createStoreAvailableDto: CreateStoreAvailableDto): Promise<StoreAvailable> {
    return this.storeAvailablesService.create(createStoreAvailableDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateStoreAvailableDto: Partial<StoreAvailable>): Promise<StoreAvailable> {
    return this.storeAvailablesService.update(id, updateStoreAvailableDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<StoreAvailable> {
    return this.storeAvailablesService.remove(id);
  }
}