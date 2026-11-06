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
import { GetApi } from './components/get-api/get-api';
import { ClientCrudGETPUTPostDelete } from './components/client-crud-get-put-post-delete/client-crud-get-put-post-delete';
import { BusBooking } from './components/bus-booking/bus-booking';
import { Pipes } from './components/pipes/pipes';
import { LifeCycleEvents } from './components/life-cycle-events/life-cycle-events';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { PageNotfound } from './components/page-notfound/page-notfound';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    
    {
        path: 'login',
        component: Login
    },
    {
        path: 'adminLayout',
        component: Layout,
        children: [
            {
                path: 'logo',
                component: Logo
            },
            {
                path: 'variables',
                component: Variables
            },
            {
                path: 'data-binding',
                component: DataBinding,
                canActivate:[authGuard]
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
                path: 'template-form',
                component: TemplateForm

            },
            {
                path: 'reactive-form',
                component: ReactiveForm

            },
            {
                path: 'signal-basic',
                component: SignalBasic
            },
            {
                path: 'signal-form',
                component: SignalForm
            }, {
                path: 'get-api',
                component: GetApi
            },
            {
                path: 'clients',
                component: ClientCrudGETPUTPostDelete
            },
            {
                path: 'bus-booking',
                component: BusBooking
            },
            {
                path: 'pipes',
                component: Pipes
            },
            {
                path: 'life-cycle',
                component: LifeCycleEvents
            },

        ]
    },
    {
        path: '**',
        component:PageNotfound
    },

];
