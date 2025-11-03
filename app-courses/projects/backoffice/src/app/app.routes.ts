import { Routes } from '@angular/router';
import { Container } from './container/container';
import { authenticationGuard } from './core/guards/authentication-guard';

export const routes: Routes = [
    { path: "login", component: Container },
    { path: "user", loadComponent: () => import('./user/user').then(m => m.User), canActivate: [authenticationGuard] },
    { path: "dashboard", loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard), canActivate: [authenticationGuard] },
    { path: "course", loadComponent: () => import('./course/course').then(m => m.Course), canActivate: [authenticationGuard] },
    { path: "schedule", loadComponent: () => import('./schedule/schedule').then(m => m.Schedule), canActivate: [authenticationGuard] },
    { path: "teacher", loadComponent: () => import('./teacher/teacher').then(m => m.Teacher), canActivate: [authenticationGuard] },
    { path: "lock-session", loadComponent: () => import('./core/components/lock-session/lock-session').then(m => m.LockSession), canActivate: [authenticationGuard] },
    { path: "**", redirectTo: "login" },
];
