import { Injectable } from '@nestjs/common';
import { Course } from './couses.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'NestJS',
            description: 'Curso sobre nestjs',
            tags: ['node.js', 'nestjs', 'javascript']
        }
    ]

}
