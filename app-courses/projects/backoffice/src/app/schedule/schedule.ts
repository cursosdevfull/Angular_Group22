import { Component } from '@angular/core';
import { Layout } from '../core/services/layout';
import { Title } from '../core/components/title/title';
import { Container } from '../core/components/container/container';
import { Table } from '../core/components/table/table';
import { Metadata } from '../core/types/metadata';

@Component({
  selector: 'bo-schedule',
  imports: [Title, Container, Table],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css'
})
export class Schedule {
  metadata: Metadata = [
    { title: "Schedule ID", field: "scheduleId" },
    { title: "Course's Name", field: "course" },
    { title: "Teacher", field: "instructor" },
    { title: "Hours", field: "time" },
    { title: "Frequency", field: "days" }
  ]

  dataSource: { scheduleId: number; course: string; instructor: string; time: string; days: string }[] = [
    { scheduleId: 1, course: "Math 101", instructor: "John Doe", time: "9:00 AM - 10:30 AM", days: "Mon, Wed, Fri" },
    { scheduleId: 2, course: "History 201", instructor: "Jane Smith", time: "11:00 AM - 12:30 PM", days: "Tue, Thu" },
    { scheduleId: 3, course: "Science 301", instructor: "Emily Johnson", time: "1:00 PM - 2:30 PM", days: "Mon, Wed" },
    { scheduleId: 4, course: "Art 101", instructor: "Michael Brown", time: "3:00 PM - 4:30 PM", days: "Fri" },
    { scheduleId: 5, course: "Physics 101", instructor: "David Wilson", time: "8:00 AM - 9:30 AM", days: "Mon, Wed, Fri" },
    { scheduleId: 6, course: "Chemistry 201", instructor: "Sarah Davis", time: "10:00 AM - 11:30 AM", days: "Tue, Thu" },
    { scheduleId: 7, course: "Biology 301", instructor: "Robert Miller", time: "2:00 PM - 3:30 PM", days: "Mon, Wed" },
    { scheduleId: 8, course: "English 101", instructor: "Lisa Garcia", time: "4:00 PM - 5:30 PM", days: "Tue, Thu" },
    { scheduleId: 9, course: "Philosophy 201", instructor: "Thomas Anderson", time: "9:30 AM - 11:00 AM", days: "Mon, Fri" },
    { scheduleId: 10, course: "Psychology 101", instructor: "Maria Rodriguez", time: "12:00 PM - 1:30 PM", days: "Wed, Fri" },
    { scheduleId: 11, course: "Computer Science 301", instructor: "James Taylor", time: "8:30 AM - 10:00 AM", days: "Tue, Thu" },
    { scheduleId: 12, course: "Statistics 201", instructor: "Jennifer Martinez", time: "1:30 PM - 3:00 PM", days: "Mon, Wed, Fri" },
    { scheduleId: 13, course: "Calculus 301", instructor: "William Jackson", time: "10:30 AM - 12:00 PM", days: "Tue, Thu" },
    { scheduleId: 14, course: "Literature 101", instructor: "Patricia White", time: "3:30 PM - 5:00 PM", days: "Mon, Wed" },
    { scheduleId: 15, course: "Economics 201", instructor: "Charles Harris", time: "7:00 AM - 8:30 AM", days: "Tue, Thu, Fri" },
    { scheduleId: 16, course: "Sociology 101", instructor: "Barbara Clark", time: "11:30 AM - 1:00 PM", days: "Mon, Wed" },
    { scheduleId: 17, course: "Anthropology 201", instructor: "Richard Lewis", time: "2:30 PM - 4:00 PM", days: "Tue, Thu" },
    { scheduleId: 18, course: "Political Science 301", instructor: "Susan Walker", time: "5:00 PM - 6:30 PM", days: "Mon, Fri" },
    { scheduleId: 19, course: "Geography 101", instructor: "Kevin Hall", time: "9:00 AM - 10:30 AM", days: "Wed, Fri" },
    { scheduleId: 20, course: "Music Theory 201", instructor: "Nancy Allen", time: "10:00 AM - 11:30 AM", days: "Mon, Wed, Fri" },
    { scheduleId: 21, course: "Art History 301", instructor: "Daniel Young", time: "12:30 PM - 2:00 PM", days: "Tue, Thu" },
    { scheduleId: 22, course: "Theatre 101", instructor: "Carol King", time: "4:30 PM - 6:00 PM", days: "Mon, Wed" },
    { scheduleId: 23, course: "Film Studies 201", instructor: "Steven Wright", time: "6:00 PM - 7:30 PM", days: "Tue, Thu" },
    { scheduleId: 24, course: "Photography 101", instructor: "Helen Lopez", time: "7:30 AM - 9:00 AM", days: "Wed, Fri" },
    { scheduleId: 25, course: "Architecture 301", instructor: "Paul Hill", time: "11:00 AM - 12:30 PM", days: "Mon, Wed, Fri" },
    { scheduleId: 26, course: "Engineering 201", instructor: "Michelle Scott", time: "1:00 PM - 2:30 PM", days: "Tue, Thu" },
    { scheduleId: 27, course: "Business 101", instructor: "George Green", time: "3:00 PM - 4:30 PM", days: "Mon, Wed" },
    { scheduleId: 28, course: "Marketing 201", instructor: "Dorothy Adams", time: "8:00 AM - 9:30 AM", days: "Tue, Thu, Fri" },
    { scheduleId: 29, course: "Finance 301", instructor: "Frank Baker", time: "9:30 AM - 11:00 AM", days: "Mon, Wed" },
    { scheduleId: 30, course: "Accounting 101", instructor: "Ruth Campbell", time: "11:30 AM - 1:00 PM", days: "Tue, Thu" },
    { scheduleId: 31, course: "Law 201", instructor: "Edward Parker", time: "2:00 PM - 3:30 PM", days: "Wed, Fri" },
    { scheduleId: 32, course: "Medicine 301", instructor: "Sharon Evans", time: "7:00 AM - 8:30 AM", days: "Mon, Wed, Fri" },
    { scheduleId: 33, course: "Nursing 101", instructor: "Christopher Turner", time: "4:00 PM - 5:30 PM", days: "Tue, Thu" },
    { scheduleId: 34, course: "Dentistry 201", instructor: "Angela Phillips", time: "5:30 PM - 7:00 PM", days: "Mon, Wed" },
    { scheduleId: 35, course: "Pharmacy 301", instructor: "Joshua Mitchell", time: "8:30 AM - 10:00 AM", days: "Tue, Thu" },
    { scheduleId: 36, course: "Veterinary 101", instructor: "Kimberly Carter", time: "10:30 AM - 12:00 PM", days: "Wed, Fri" },
    { scheduleId: 37, course: "Agriculture 201", instructor: "Ryan Roberts", time: "12:00 PM - 1:30 PM", days: "Mon, Wed, Fri" },
    { scheduleId: 38, course: "Environmental Science 301", instructor: "Amy Gomez", time: "1:30 PM - 3:00 PM", days: "Tue, Thu" },
    { scheduleId: 39, course: "Geology 101", instructor: "Brian Phillips", time: "3:30 PM - 5:00 PM", days: "Mon, Wed" },
    { scheduleId: 40, course: "Astronomy 201", instructor: "Nicole Edwards", time: "6:30 PM - 8:00 PM", days: "Tue, Thu" },
    { scheduleId: 41, course: "Meteorology 301", instructor: "Jason Collins", time: "7:30 AM - 9:00 AM", days: "Wed, Fri" },
    { scheduleId: 42, course: "Oceanography 101", instructor: "Stephanie Stewart", time: "9:00 AM - 10:30 AM", days: "Mon, Wed, Fri" },
    { scheduleId: 43, course: "Robotics 201", instructor: "Adam Sanchez", time: "10:00 AM - 11:30 AM", days: "Tue, Thu" },
    { scheduleId: 44, course: "Data Science 301", instructor: "Rebecca Morris", time: "11:30 AM - 1:00 PM", days: "Mon, Wed" },
    { scheduleId: 45, course: "Cybersecurity 101", instructor: "Justin Rogers", time: "2:30 PM - 4:00 PM", days: "Tue, Thu" },
    { scheduleId: 46, course: "Game Development 201", instructor: "Crystal Reed", time: "4:30 PM - 6:00 PM", days: "Wed, Fri" },
    { scheduleId: 47, course: "Web Design 301", instructor: "Tyler Cook", time: "6:00 PM - 7:30 PM", days: "Mon, Wed, Fri" },
    { scheduleId: 48, course: "Mobile Development 101", instructor: "Samantha Bailey", time: "7:00 AM - 8:30 AM", days: "Tue, Thu" },
    { scheduleId: 49, course: "Machine Learning 201", instructor: "Gregory Rivera", time: "8:30 AM - 10:00 AM", days: "Mon, Wed" },
    { scheduleId: 50, course: "Artificial Intelligence 301", instructor: "Lauren Cooper", time: "10:30 AM - 12:00 PM", days: "Tue, Thu" },
    { scheduleId: 51, course: "Blockchain 101", instructor: "Brandon Richardson", time: "12:30 PM - 2:00 PM", days: "Wed, Fri" },
    { scheduleId: 52, course: "Cloud Computing 201", instructor: "Melissa Cox", time: "2:00 PM - 3:30 PM", days: "Mon, Wed, Fri" },
    { scheduleId: 53, course: "Network Security 301", instructor: "Jonathan Ward", time: "3:30 PM - 5:00 PM", days: "Tue, Thu" },
    { scheduleId: 54, course: "Digital Marketing 101", instructor: "Amanda Torres", time: "5:00 PM - 6:30 PM", days: "Mon, Wed" }
  ];

  constructor(private layout: Layout) {
    this.layout.showMenu.set(true);
    this.layout.showHeader.set(true);
  }
}
