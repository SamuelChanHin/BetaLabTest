import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
    secret: 'secretKey', // must put in .env
};
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);