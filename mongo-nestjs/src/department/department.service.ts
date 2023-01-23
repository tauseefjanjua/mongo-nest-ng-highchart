import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartmentDto } from 'src/dto/create-department.dto';
import { Department } from 'src/entity/department.entity';

@Injectable()
export class DepartmentService {
    constructor(
        @InjectModel('Department')
        private readonly DepartmentModel: Model<Department>,
    ) { }

    async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
        const newDepartment = new this.DepartmentModel(createDepartmentDto);
        const result = await newDepartment.save();
        return result;
    }

    async findAllDepartments() {
        const departments = await this.DepartmentModel.find().exec();
        return departments;
    }
}
