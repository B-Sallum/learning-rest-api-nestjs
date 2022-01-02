import { UpdatePlantDto } from './dto/update-plant.dto';
import { CreatePlantDto } from './dto/create-plant.dto';
import { PlantsService } from './plants.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Plant } from '@prisma/client';

@Controller('plants')
export class PlantsController {
  constructor(private service: PlantsService) {}

  @Post('create')
  createPlant(@Body() data: CreatePlantDto): Promise<Plant> {
    return this.service.createPlant(data);
  }

  @Get('all')
  getAllPlants(): Promise<Plant[]> {
    return this.service.getAll();
  }

  @Get(':id')
  getPlantId(@Param('id') id: string): Promise<Plant> {
    return this.service.getPlantId(id);
  }

  @Patch(':id')
  updatePlant(
    @Param('id') id: string,
    @Body() data: UpdatePlantDto,
  ): Promise<Plant> {
    return this.service.updatePlant(id, data);
  }
}
