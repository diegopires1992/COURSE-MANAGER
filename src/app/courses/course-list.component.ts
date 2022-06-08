import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: "Angular: Forms",
        imageUrl: "",
        price: 300,
        duration: 125,
        rating: 5.4,
        code: 'AXPSADSAD',
        releaseDate: '2021-06-07'
      }, {
        id: 2,
        name: "Angular: HTTP",
        imageUrl: "",
        price: 500,
        duration: 80,
        rating: 4,
        code: 'AXPSADSAD',
        releaseDate: '2021-06-07'
      }
    ]
  }

}
