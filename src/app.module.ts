import { Module } from '@nestjs/common';
import { SmartRoosterApi } from 'smart-rooster';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SmartRoosterApi],
})
export class AppModule {}
