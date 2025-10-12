import { Component } from '@angular/core';
import { Container } from '../core/components/container/container';
import { Title } from '../core/components/title/title';
import { Layout } from '../core/services/layout';
import { Metadata } from '../core/types/metadata';
import { Table } from '../core/components/table/table';

@Component({
  selector: 'bo-teacher',
  imports: [Title, Container, Table],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css'
})
export class Teacher {
  metadata: Metadata = [
    { title: "Teacher ID", field: "teacherId" },
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Department", field: "department" }
  ]

  dataSource: { teacherId: number; firstName: string; lastName: string; email: string; phone: string; department: string }[] = [
    { teacherId: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", phone: "555-1234", department: "Mathematics" },
    { teacherId: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", phone: "555-5678", department: "Science" },
    { teacherId: 3, firstName: "Emily", lastName: "Johnson", email: "emily.johnson@example.com", phone: "555-8765", department: "Literature" },
    { teacherId: 4, firstName: "Michael", lastName: "Brown", email: "michael.brown@example.com", phone: "555-4321", department: "History" },
    { teacherId: 5, firstName: "Sarah", lastName: "Davis", email: "sarah.davis@example.com", phone: "555-2468", department: "Art" },
    { teacherId: 6, firstName: "David", lastName: "Wilson", email: "david.wilson@example.com", phone: "555-3690", department: "Physics" },
    { teacherId: 7, firstName: "Lisa", lastName: "Garcia", email: "lisa.garcia@example.com", phone: "555-7410", department: "Chemistry" },
    { teacherId: 8, firstName: "Robert", lastName: "Miller", email: "robert.miller@example.com", phone: "555-8520", department: "Biology" },
    { teacherId: 9, firstName: "Maria", lastName: "Rodriguez", email: "maria.rodriguez@example.com", phone: "555-9630", department: "Psychology" },
    { teacherId: 10, firstName: "Thomas", lastName: "Anderson", email: "thomas.anderson@example.com", phone: "555-1470", department: "Philosophy" },
    { teacherId: 11, firstName: "Jennifer", lastName: "Martinez", email: "jennifer.martinez@example.com", phone: "555-2580", department: "Statistics" },
    { teacherId: 12, firstName: "James", lastName: "Taylor", email: "james.taylor@example.com", phone: "555-3690", department: "Computer Science" },
    { teacherId: 13, firstName: "Patricia", lastName: "White", email: "patricia.white@example.com", phone: "555-4701", department: "English" },
    { teacherId: 14, firstName: "William", lastName: "Jackson", email: "william.jackson@example.com", phone: "555-5812", department: "Calculus" },
    { teacherId: 15, firstName: "Barbara", lastName: "Clark", email: "barbara.clark@example.com", phone: "555-6923", department: "Sociology" },
    { teacherId: 16, firstName: "Charles", lastName: "Harris", email: "charles.harris@example.com", phone: "555-7034", department: "Economics" },
    { teacherId: 17, firstName: "Susan", lastName: "Walker", email: "susan.walker@example.com", phone: "555-8145", department: "Political Science" },
    { teacherId: 18, firstName: "Richard", lastName: "Lewis", email: "richard.lewis@example.com", phone: "555-9256", department: "Anthropology" },
    { teacherId: 19, firstName: "Nancy", lastName: "Allen", email: "nancy.allen@example.com", phone: "555-1367", department: "Music Theory" },
    { teacherId: 20, firstName: "Kevin", lastName: "Hall", email: "kevin.hall@example.com", phone: "555-2478", department: "Geography" },
    { teacherId: 21, firstName: "Carol", lastName: "King", email: "carol.king@example.com", phone: "555-3589", department: "Theatre" },
    { teacherId: 22, firstName: "Daniel", lastName: "Young", email: "daniel.young@example.com", phone: "555-4690", department: "Art History" },
    { teacherId: 23, firstName: "Helen", lastName: "Lopez", email: "helen.lopez@example.com", phone: "555-5701", department: "Photography" },
    { teacherId: 24, firstName: "Steven", lastName: "Wright", email: "steven.wright@example.com", phone: "555-6812", department: "Film Studies" },
    { teacherId: 25, firstName: "Michelle", lastName: "Scott", email: "michelle.scott@example.com", phone: "555-7923", department: "Engineering" },
    { teacherId: 26, firstName: "Paul", lastName: "Hill", email: "paul.hill@example.com", phone: "555-8034", department: "Architecture" },
    { teacherId: 27, firstName: "Dorothy", lastName: "Adams", email: "dorothy.adams@example.com", phone: "555-9145", department: "Marketing" },
    { teacherId: 28, firstName: "George", lastName: "Green", email: "george.green@example.com", phone: "555-1256", department: "Business" },
    { teacherId: 29, firstName: "Ruth", lastName: "Campbell", email: "ruth.campbell@example.com", phone: "555-2367", department: "Accounting" },
    { teacherId: 30, firstName: "Frank", lastName: "Baker", email: "frank.baker@example.com", phone: "555-3478", department: "Finance" },
    { teacherId: 31, firstName: "Sharon", lastName: "Evans", email: "sharon.evans@example.com", phone: "555-4589", department: "Medicine" },
    { teacherId: 32, firstName: "Edward", lastName: "Parker", email: "edward.parker@example.com", phone: "555-5690", department: "Law" },
    { teacherId: 33, firstName: "Angela", lastName: "Phillips", email: "angela.phillips@example.com", phone: "555-6701", department: "Dentistry" },
    { teacherId: 34, firstName: "Christopher", lastName: "Turner", email: "christopher.turner@example.com", phone: "555-7812", department: "Nursing" },
    { teacherId: 35, firstName: "Kimberly", lastName: "Carter", email: "kimberly.carter@example.com", phone: "555-8923", department: "Veterinary" },
    { teacherId: 36, firstName: "Joshua", lastName: "Mitchell", email: "joshua.mitchell@example.com", phone: "555-9034", department: "Pharmacy" },
    { teacherId: 37, firstName: "Amy", lastName: "Gomez", email: "amy.gomez@example.com", phone: "555-1145", department: "Environmental Science" },
    { teacherId: 38, firstName: "Ryan", lastName: "Roberts", email: "ryan.roberts@example.com", phone: "555-2256", department: "Agriculture" },
    { teacherId: 39, firstName: "Nicole", lastName: "Edwards", email: "nicole.edwards@example.com", phone: "555-3367", department: "Astronomy" },
    { teacherId: 40, firstName: "Brian", lastName: "Phillips", email: "brian.phillips@example.com", phone: "555-4478", department: "Geology" },
    { teacherId: 41, firstName: "Stephanie", lastName: "Stewart", email: "stephanie.stewart@example.com", phone: "555-5589", department: "Oceanography" },
    { teacherId: 42, firstName: "Jason", lastName: "Collins", email: "jason.collins@example.com", phone: "555-6690", department: "Meteorology" },
    { teacherId: 43, firstName: "Rebecca", lastName: "Morris", email: "rebecca.morris@example.com", phone: "555-7701", department: "Data Science" },
    { teacherId: 44, firstName: "Adam", lastName: "Sanchez", email: "adam.sanchez@example.com", phone: "555-8812", department: "Robotics" },
    { teacherId: 45, firstName: "Crystal", lastName: "Reed", email: "crystal.reed@example.com", phone: "555-9923", department: "Game Development" },
    { teacherId: 46, firstName: "Justin", lastName: "Rogers", email: "justin.rogers@example.com", phone: "555-1034", department: "Cybersecurity" },
    { teacherId: 47, firstName: "Samantha", lastName: "Bailey", email: "samantha.bailey@example.com", phone: "555-2145", department: "Mobile Development" },
    { teacherId: 48, firstName: "Tyler", lastName: "Cook", email: "tyler.cook@example.com", phone: "555-3256", department: "Web Design" },
    { teacherId: 49, firstName: "Lauren", lastName: "Cooper", email: "lauren.cooper@example.com", phone: "555-4367", department: "Artificial Intelligence" },
    { teacherId: 50, firstName: "Gregory", lastName: "Rivera", email: "gregory.rivera@example.com", phone: "555-5478", department: "Machine Learning" },
    { teacherId: 51, firstName: "Melissa", lastName: "Cox", email: "melissa.cox@example.com", phone: "555-6589", department: "Cloud Computing" },
    { teacherId: 52, firstName: "Brandon", lastName: "Richardson", email: "brandon.richardson@example.com", phone: "555-7690", department: "Blockchain" },
    { teacherId: 53, firstName: "Amanda", lastName: "Torres", email: "amanda.torres@example.com", phone: "555-8701", department: "Digital Marketing" },
    { teacherId: 54, firstName: "Jonathan", lastName: "Ward", email: "jonathan.ward@example.com", phone: "555-9812", department: "Network Security" },
    { teacherId: 55, firstName: "Rachel", lastName: "Peterson", email: "rachel.peterson@example.com", phone: "555-1923", department: "Graphic Design" }
  ];

  constructor(private layout: Layout) {
    this.layout.showMenu.set(true)
    this.layout.showHeader.set(true)
  }
}
