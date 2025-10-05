import { Routes } from '@angular/router';
import { Container } from './container/container';

export const routes: Routes = [
    //{ path: "", component: Container },
    { path: "login", component: Container },
    { path: "dashboard", loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard) },
    { path: "course", loadComponent: () => import('./course/course').then(m => m.Course) },
    { path: "schedule", loadComponent: () => import('./schedule/schedule').then(m => m.Schedule) },
    { path: "teacher", loadComponent: () => import('./teacher/teacher').then(m => m.Teacher) },
    { path: "**", redirectTo: "login" },
];
