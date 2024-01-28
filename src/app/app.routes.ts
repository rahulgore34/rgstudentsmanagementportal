import { Routes } from '@angular/router';
import { DashboardComponent } from './students/dashboard/dashboard.component';
import { CreateComponent } from './students/create/create.component';
import { ListComponent } from './students/list/list.component';

export const routes: Routes = [
    {
        path: 'students',
        component: DashboardComponent,
        children: [
            {
                path: '', redirectTo: 'list', pathMatch: 'full'
            },
            {
                path: 'create',
                component: CreateComponent
            },
            {
                path: 'list',
                component: ListComponent
            }
        ]
    }
];
