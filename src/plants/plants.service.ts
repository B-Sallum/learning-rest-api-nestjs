import { CreatePlantDto } from './dto/create-plant.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlantsService {
  database: CreatePlantDto[] = [];

  createPlant(data: CreatePlantDto): CreatePlantDto[] {
    this.database.push(data);
    return this.database;
  }
}
