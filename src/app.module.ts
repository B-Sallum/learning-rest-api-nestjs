import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PlantsModule } from './plants/plants.module';

@Module({
  imports: [UserModule, PlantsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
