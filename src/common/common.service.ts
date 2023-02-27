import { Injectable, Provider } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CommonService {}

export const UUID: Provider = {
  useValue: uuid,
  provide: 'UUID',
};
