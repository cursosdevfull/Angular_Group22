import { Routes } from '@angular/router';
import { C1 } from './c1/c1';
import { C2 } from './c2/c2';
import { C3 } from './c3/c3';
import { C4 } from './c4/c4';
import { C5 } from './c5/c5';

export const routes: Routes = [
    { path: "c1", component: C1 },
    { path: "c2", component: C2 },
    { path: "c3", component: C3 },
    { path: "c4", component: C4 },
    { path: "c5", component: C5 }
];
