import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ValidateNumericIdPipe } from 'src/validate-id/validate-id.interceptor';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() response) {
    return response.status(200).json({message: 'Listagem de cursos'})
  }

  @Get(':id')
  findOne(@Param('id', new ValidateNumericIdPipe()) id: number): string {
    return `Curso com ID ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
