import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDepartmentDto } from 'src/dto/create-department.dto';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) { }
  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto);
  }

  @Get()
  async findAll() {
    const allDepartment = await this.departmentService.findAllDepartments();
    return allDepartment;
  }
}
