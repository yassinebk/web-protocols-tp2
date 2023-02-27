import { Module } from '@nestjs/common';
import { CommonService, UUID } from './common.service';

@Module({
  exports: [CommonService,UUID],
  providers: [CommonService, UUID],

})
export class CommonModule {}
