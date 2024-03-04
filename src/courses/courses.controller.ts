import { Body, Controller, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { ValidateNumericIdPipe } from 'src/validate-id/validate-id.interceptor';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) { }

  @Get()
  findAll(@Res() response) {
    return response.status(200).json({ message: 'Listagem de cursos' })
  }

  @Get(':id')
  findOne(@Param('id', new ValidateNumericIdPipe()) id: number): string {
    return `Curso com ID ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id', new ValidateNumericIdPipe()) id: number, @Body() body): string {
    return `Curso ${id} atualizado.`
  }
}
