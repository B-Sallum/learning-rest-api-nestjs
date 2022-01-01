import { CreatePlantDto } from './dto/create-plant.dto';
import { PlantsService } from './plants.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('plants')
export class PlantsController {
  constructor(private service: PlantsService) {}

  @Post('create')
  createPlant(@Body() data: CreatePlantDto): CreatePlantDto[] {
    return this.service.createPlant(data);
  }
}
