import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [
    DepartmentModule,
    MongooseModule.forRoot(
      'mongodb+srv://Tauseef:Lahore42@cluster0.stjfmaf.mongodb.net/?retryWrites=true&w=majority'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
