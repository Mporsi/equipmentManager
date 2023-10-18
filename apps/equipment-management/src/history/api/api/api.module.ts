import { Module } from '@nestjs/common';
import { AsyncListenerModule } from '../async/async-listener.module';

@Module({
  imports: [AsyncListenerModule],
})
export class ApiModule {}
