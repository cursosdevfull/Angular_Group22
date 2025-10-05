import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses = signal([
    { id: 1, name: 'Angular', category: 'Frontend' },
    { id: 2, name: 'React', category: 'Frontend' },
    { id: 3, name: 'Vue', category: 'Frontend' },
    { id: 4, name: 'Node', category: 'Backend' },
    { id: 5, name: 'Django', category: 'Backend' },
    { id: 6, name: 'Flask', category: 'Backend' },
    { id: 7, name: 'Spring', category: 'Backend' },
    { id: 8, name: 'Laravel', category: 'Backend' },
    { id: 9, name: 'Ruby on Rails', category: 'Backend' },
    { id: 10, name: 'ASP.NET', category: 'Backend' },
  ])

  obs = new Observable()
}
