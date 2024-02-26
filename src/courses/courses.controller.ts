import { Controller, Get, Param } from '@nestjs/common';
import { ValidateNumericIdPipe } from 'src/validate-id/validate-id.interceptor';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Listagem de cursos';
  }

  @Get(':id')
  findOne(@Param('id', new ValidateNumericIdPipe()) id: number): string {
    return `Curso com ID ${id}`;
  }
}
