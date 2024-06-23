// src/ormconfig.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'yourusername',
  password: 'yourpassword',
  database: 'techwebshop',
  entities: [],
  synchronize: true,
};