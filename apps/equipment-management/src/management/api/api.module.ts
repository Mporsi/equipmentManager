import { SyncApiModule } from './sync-api/sync-api.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [SyncApiModule],
})
export class ApiModule {}
