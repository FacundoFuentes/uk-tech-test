import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'), // Cambia el URI según tu configuración
  ],
})
export class DatabaseModule {}
