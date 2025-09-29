import { Routes } from '@angular/router';
import { Container } from './container/container';
import { Dashboard } from './dashboard/dashboard';
import { Course } from './course/course';

export const routes: Routes = [
    { path: "", component: Container },
    { path: "login", component: Container },
    {
        path: "dashboard", loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
    },
    { path: "course", loadComponent: () => import('./course/course').then(m => m.Course) },
    { path: "**", redirectTo: "" },
];
