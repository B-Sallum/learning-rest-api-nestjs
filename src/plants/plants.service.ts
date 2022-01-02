import { CreatePlantDto } from './dto/create-plant.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Plant } from '@prisma/client';
import { UpdatePlantDto } from './dto/update-plant.dto';

@Injectable()
export class PlantsService {
  constructor(private database: PrismaService) {}

  async createPlant(data: CreatePlantDto): Promise<Plant> {
    const newPlant = await this.database.plant.create({
      data: data,
    });
    return newPlant;
  }

  async getAll(): Promise<Plant[]> {
    const allPlants = await this.database.plant.findMany();
    return allPlants;
  }

  async getPlantId(id: string): Promise<Plant> {
    const plant = await this.database.plant.findUnique({
      where: { id: id },
    });
    return plant;
  }

  async updatePlant(id: string, data: UpdatePlantDto): Promise<Plant> {
    const updatePlant = await this.database.plant.update({
      where: { id: id },
      data: data,
    });
    return updatePlant;
  }
}
