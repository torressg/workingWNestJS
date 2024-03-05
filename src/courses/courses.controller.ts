import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
  findOne(@Param('id', new ValidateNumericIdPipe()) id: number) {
    return this.courseService.findOne(id)
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
