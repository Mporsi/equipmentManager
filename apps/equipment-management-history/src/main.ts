import { NestFactory } from '@nestjs/core';
import { EquipmentManagementHistoryModule } from './equipment-management-history.module';

async function bootstrap() {
  const app = await NestFactory.create(EquipmentManagementHistoryModule);
  await app.listen(3000);
}
bootstrap();
