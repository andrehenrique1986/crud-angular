import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

    courses$: Observable<Course[]>;
    displayedColumns=['name','category'];



    constructor(private courseService:CoursesService){

      //this.courseService =new CoursesService();
      this.courses$ = this.courseService.list();

    }

    ngOnInit(): void {

    }

}

