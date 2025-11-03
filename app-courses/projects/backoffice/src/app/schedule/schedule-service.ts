import { Injectable } from '@angular/core';
import { ScheduleType } from './schedule-type';
import { BaseService } from '../core/services/base';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends BaseService<ScheduleType> {
  readonly dataSourceOriginal: ScheduleType[] = [
    { id: 1, course: "Math 101", instructor: "John Doe", time: "9:00 AM - 10:30 AM", days: "Mon, Wed, Fri" },
    { id: 2, course: "History 201", instructor: "Jane Smith", time: "11:00 AM - 12:30 PM", days: "Tue, Thu" },
    { id: 3, course: "Science 301", instructor: "Emily Johnson", time: "1:00 PM - 2:30 PM", days: "Mon, Wed" },
    { id: 4, course: "Art 101", instructor: "Michael Brown", time: "3:00 PM - 4:30 PM", days: "Fri" },
    { id: 5, course: "Physics 101", instructor: "David Wilson", time: "8:00 AM - 9:30 AM", days: "Mon, Wed, Fri" },
    { id: 6, course: "Chemistry 201", instructor: "Sarah Davis", time: "10:00 AM - 11:30 AM", days: "Tue, Thu" },
    { id: 7, course: "Biology 301", instructor: "Robert Miller", time: "2:00 PM - 3:30 PM", days: "Mon, Wed" },
    { id: 8, course: "English 101", instructor: "Lisa Garcia", time: "4:00 PM - 5:30 PM", days: "Tue, Thu" },
    { id: 9, course: "Philosophy 201", instructor: "Thomas Anderson", time: "9:30 AM - 11:00 AM", days: "Mon, Fri" },
    { id: 10, course: "Psychology 101", instructor: "Maria Rodriguez", time: "12:00 PM - 1:30 PM", days: "Wed, Fri" },
    { id: 11, course: "Computer Science 301", instructor: "James Taylor", time: "8:30 AM - 10:00 AM", days: "Tue, Thu" },
    { id: 12, course: "Statistics 201", instructor: "Jennifer Martinez", time: "1:30 PM - 3:00 PM", days: "Mon, Wed, Fri" },
    { id: 13, course: "Calculus 301", instructor: "William Jackson", time: "10:30 AM - 12:00 PM", days: "Tue, Thu" },
    { id: 14, course: "Literature 101", instructor: "Patricia White", time: "3:30 PM - 5:00 PM", days: "Mon, Wed" },
    { id: 15, course: "Economics 201", instructor: "Charles Harris", time: "7:00 AM - 8:30 AM", days: "Tue, Thu, Fri" },
    { id: 16, course: "Sociology 101", instructor: "Barbara Clark", time: "11:30 AM - 1:00 PM", days: "Mon, Wed" },
    { id: 17, course: "Anthropology 201", instructor: "Richard Lewis", time: "2:30 PM - 4:00 PM", days: "Tue, Thu" },
    { id: 18, course: "Political Science 301", instructor: "Susan Walker", time: "5:00 PM - 6:30 PM", days: "Mon, Fri" },
    { id: 19, course: "Geography 101", instructor: "Kevin Hall", time: "9:00 AM - 10:30 AM", days: "Wed, Fri" },
    { id: 20, course: "Music Theory 201", instructor: "Nancy Allen", time: "10:00 AM - 11:30 AM", days: "Mon, Wed, Fri" },
    { id: 21, course: "Art History 301", instructor: "Daniel Young", time: "12:30 PM - 2:00 PM", days: "Tue, Thu" },
    { id: 22, course: "Theatre 101", instructor: "Carol King", time: "4:30 PM - 6:00 PM", days: "Mon, Wed" },
    { id: 23, course: "Film Studies 201", instructor: "Steven Wright", time: "6:00 PM - 7:30 PM", days: "Tue, Thu" },
    { id: 24, course: "Photography 101", instructor: "Helen Lopez", time: "7:30 AM - 9:00 AM", days: "Wed, Fri" },
    { id: 25, course: "Architecture 301", instructor: "Paul Hill", time: "11:00 AM - 12:30 PM", days: "Mon, Wed, Fri" },
    { id: 26, course: "Engineering 201", instructor: "Michelle Scott", time: "1:00 PM - 2:30 PM", days: "Tue, Thu" },
    { id: 27, course: "Business 101", instructor: "George Green", time: "3:00 PM - 4:30 PM", days: "Mon, Wed" },
    { id: 28, course: "Marketing 201", instructor: "Dorothy Adams", time: "8:00 AM - 9:30 AM", days: "Tue, Thu, Fri" },
    { id: 29, course: "Finance 301", instructor: "Frank Baker", time: "9:30 AM - 11:00 AM", days: "Mon, Wed" },
    { id: 30, course: "Accounting 101", instructor: "Ruth Campbell", time: "11:30 AM - 1:00 PM", days: "Tue, Thu" },
    { id: 31, course: "Law 201", instructor: "Edward Parker", time: "2:00 PM - 3:30 PM", days: "Wed, Fri" },
    { id: 32, course: "Medicine 301", instructor: "Sharon Evans", time: "7:00 AM - 8:30 AM", days: "Mon, Wed, Fri" },
    { id: 33, course: "Nursing 101", instructor: "Christopher Turner", time: "4:00 PM - 5:30 PM", days: "Tue, Thu" },
    { id: 34, course: "Dentistry 201", instructor: "Angela Phillips", time: "5:30 PM - 7:00 PM", days: "Mon, Wed" },
    { id: 35, course: "Pharmacy 301", instructor: "Joshua Mitchell", time: "8:30 AM - 10:00 AM", days: "Tue, Thu" },
    { id: 36, course: "Veterinary 101", instructor: "Kimberly Carter", time: "10:30 AM - 12:00 PM", days: "Wed, Fri" },
    { id: 37, course: "Agriculture 201", instructor: "Ryan Roberts", time: "12:00 PM - 1:30 PM", days: "Mon, Wed, Fri" },
    { id: 38, course: "Environmental Science 301", instructor: "Amy Gomez", time: "1:30 PM - 3:00 PM", days: "Tue, Thu" },
    { id: 39, course: "Geology 101", instructor: "Brian Phillips", time: "3:30 PM - 5:00 PM", days: "Mon, Wed" },
    { id: 40, course: "Astronomy 201", instructor: "Nicole Edwards", time: "6:30 PM - 8:00 PM", days: "Tue, Thu" },
    { id: 41, course: "Meteorology 301", instructor: "Jason Collins", time: "7:30 AM - 9:00 AM", days: "Wed, Fri" },
    { id: 42, course: "Oceanography 101", instructor: "Stephanie Stewart", time: "9:00 AM - 10:30 AM", days: "Mon, Wed, Fri" },
    { id: 43, course: "Robotics 201", instructor: "Adam Sanchez", time: "10:00 AM - 11:30 AM", days: "Tue, Thu" },
    { id: 44, course: "Data Science 301", instructor: "Rebecca Morris", time: "11:30 AM - 1:00 PM", days: "Mon, Wed" },
    { id: 45, course: "Cybersecurity 101", instructor: "Justin Rogers", time: "2:30 PM - 4:00 PM", days: "Tue, Thu" },
    { id: 46, course: "Game Development 201", instructor: "Crystal Reed", time: "4:30 PM - 6:00 PM", days: "Wed, Fri" },
    { id: 47, course: "Web Design 301", instructor: "Tyler Cook", time: "6:00 PM - 7:30 PM", days: "Mon, Wed, Fri" },
    { id: 48, course: "Mobile Development 101", instructor: "Samantha Bailey", time: "7:00 AM - 8:30 AM", days: "Tue, Thu" },
    { id: 49, course: "Machine Learning 201", instructor: "Gregory Rivera", time: "8:30 AM - 10:00 AM", days: "Mon, Wed" },
    { id: 50, course: "Artificial Intelligence 301", instructor: "Lauren Cooper", time: "10:30 AM - 12:00 PM", days: "Tue, Thu" },
    { id: 51, course: "Blockchain 101", instructor: "Brandon Richardson", time: "12:30 PM - 2:00 PM", days: "Wed, Fri" },
    { id: 52, course: "Cloud Computing 201", instructor: "Melissa Cox", time: "2:00 PM - 3:30 PM", days: "Mon, Wed, Fri" },
    { id: 53, course: "Network Security 301", instructor: "Jonathan Ward", time: "3:30 PM - 5:00 PM", days: "Tue, Thu" },
    { id: 54, course: "Digital Marketing 101", instructor: "Amanda Torres", time: "5:00 PM - 6:30 PM", days: "Mon, Wed" }
  ];
}
