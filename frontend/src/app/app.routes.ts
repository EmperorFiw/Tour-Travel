import { Routes } from '@angular/router';

// auth
import { LandingPage } from './auth/landing-page/landing-page';
import { Register } from './auth/register/register';
import { Login } from './auth/login/login';

//component-member
import { TourDetails } from './component-member/tour-details/tour-details';
import { ListPages } from './component-member/list-pages/list-pages';
import { authGuard, guestOnlyGuard } from './services/auth.guard';

//company
import { Dashboard } from './company/dashboard/dashboard';
import { NavbarCompany} from './company/navbar-company/navbar-company';
import { CreateTour } from './company/create-tour/create-tour';
import { EditTour } from './company/edit-tour/edit-tour';
import { ManageTour } from './company/manage-tour/manage-tour';

export const routes: Routes = [
    {path: '', component: LandingPage},
	{ path: 'register', component: Register, canActivate: [guestOnlyGuard] },
	{ path: 'login', component: Login, canActivate: [guestOnlyGuard] },

	{ path: 'tour-details', component: TourDetails },
	{ path: 'list-pages', component: ListPages },
    {
        path: 'auth/callback',
        loadComponent: () => import('./services/auth-callback')
            .then(m => m.AuthCallback)
    },
    {path: 'dashboard-company', component: Dashboard, canActivate: [authGuard]},
    {path: 'create-tour', component: CreateTour, canActivate: [authGuard]},
    {path: 'edit-tour', component: EditTour, canActivate: [authGuard]},
    {path: 'manage-tour', component: ManageTour, canActivate: [authGuard]},

];
