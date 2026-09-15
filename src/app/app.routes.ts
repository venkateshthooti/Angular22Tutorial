import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';
import { Directives } from './components/directives/directives';
import { ControlFlow } from './components/control-flow/control-flow';

export const routes: Routes = [
    {
        path: 'variables',
        component: Variables
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'directives',
        component: Directives
    },
    {
        path: 'control-flow',
        component: ControlFlow
    },
    {
        path: '',
        redirectTo: 'data-binding',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'data-binding',
        pathMatch: 'full'
    }
];
