import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/courses.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly CourseRepository: Repository<Course>,
  ) {}

  async findAll() {
    return this.CourseRepository.find();
  }

  async findOne(id: number) {
    const course = await this.CourseRepository.findOne({
      where: { id },
    });
    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found.`);
    }
    return course;
  }

  async create(createCourseDTO: any) {
    const course = this.CourseRepository.create(createCourseDTO);
    return this.CourseRepository.save(course);
  }

  async update(id: number, updateCourseDTO: any) {
    const course = await this.CourseRepository.preload({
      ...updateCourseDTO,
      id,
    });
    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found.`);
    }
    return this.CourseRepository.save(course);
  }

  async remove(id: number) {
    const course = await this.CourseRepository.findOne({
      where: { id },
    });
    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found.`);
    }
    return this.CourseRepository.remove(course);
  }
}
