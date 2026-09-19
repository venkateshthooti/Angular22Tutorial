import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';
import { Directives } from './components/directives/directives';
import { ControlFlow } from './components/control-flow/control-flow';
import { Logo } from './components/logo/logo';
import { TemplateForm } from './components/template-form/template-form';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { SignalBasic } from './components/signal-basic/signal-basic';
import { SignalForm } from './components/signal-form/signal-form';

export const routes: Routes = [
    {
        path: 'logo',
        component:Logo
    },
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
        path:'template-form',
        component:TemplateForm

    },
     {
        path:'reactive-form',
        component:ReactiveForm

    },
    {
        path:'signal-basic',
        component:SignalBasic
    },
    {
        path:'signal-form',
        component:SignalForm
    },
    {
        path: '',
        redirectTo: 'logo',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'logo',
        pathMatch: 'full'
    }
];
