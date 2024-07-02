// src/categorys/categorys.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from '../entity/categories';
import { CreateCategoryDto } from './dto/create-category.dto';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categorysService: CategoryService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categorysService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Category> {
    return this.categorysService.findOne(id);
  }

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categorysService.create(createCategoryDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: Partial<Category>): Promise<Category> {
    return this.categorysService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Category> {
    return this.categorysService.remove(id);
  }
}