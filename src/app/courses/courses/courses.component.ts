import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

    courses$: Observable<Course[]>;
    displayedColumns=['name','category','actions'];



    constructor(private courseService:CoursesService,
                 public dialog: MatDialog,
                 private router: Router,
                 private route: ActivatedRoute
                 ){

      //this.courseService =new CoursesService();
      this.courses$ = this.courseService.list()
      .pipe(
          catchError(error => {
           this.onError('Erro ao carregar cursos.');
            return of([])
          })
      );
        }

      onError(errorMsg: string) {
        this.dialog.open(ErrorDialogComponent, {
          data: errorMsg
        });
      }




    ngOnInit(): void {

    }

    onAdd(): void {
      this.router.navigate(['new'], {relativeTo:this.route});
    }

  }


