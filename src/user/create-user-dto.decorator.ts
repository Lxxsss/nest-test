import { SetMetadata } from '@nestjs/common';

export const CreateUserDto = (...args: string[]) => SetMetadata('create-user-dto', args);
