import { SyncApiModule } from './sync-api/sync-api.module';
import { AsyncApiModule } from './async-api/asyncApiModule';
import { Module } from '@nestjs/common';

@Module({
  imports: [SyncApiModule, AsyncApiModule],
})
export class ApiModule {}
