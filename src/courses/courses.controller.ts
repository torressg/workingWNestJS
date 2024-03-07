import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ValidateNumericIdPipe } from 'src/validate-id/validate-id.interceptor';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) { }

  @Get()
  findAll() {
    return this.courseService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', new ValidateNumericIdPipe()) id: number): any {
    const course = this.courseService.findOne(id);
    if (!course) {
      throw new HttpException(`Course ${id} not found.`, HttpStatus.NOT_FOUND);
    }
    return course; // Adicione esta linha para retornar o curso encontrado
  }


  @Post()
  create(@Body() body) {
    return this.courseService.create(body)
  }

  @Put(':id')
  update(@Param('id', new ValidateNumericIdPipe()) id: number, @Body() body) {
    return this.courseService.update(id, body)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.courseService.remove(id)
  }
}
