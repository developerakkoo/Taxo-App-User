import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GetOtpComponent } from './pages/get-otp/get-otp.component';
import { PopupComponent } from './pages/popup/popup.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },

  {
    path: 'slides',
    loadChildren: () => import('./pages/slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'navbar',
    loadChildren: () => import('./pages/navbar/navbar.module').then( m => m.NavbarPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'search-destination',
    loadChildren: () => import('./pages/search-destination/search-destination.module').then( m => m.SearchDestinationPageModule)
  },
  {
    path: 'trip-complete',
    loadChildren: () => import('./pages/trip-complete/trip-complete.module').then( m => m.TripCompletePageModule)
  },
  {
    path: 'get-car',
    loadChildren: () => import('./pages/get-car/get-car.module').then( m => m.GetCarPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./pages/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'sheet',
    loadChildren: () => import('./pages/sheet/sheet.module').then( m => m.SheetPageModule)
  },
  {
    path: 'get-otp',
    // loadChildren: () => import('./pages/sheet/sheet.module').then( m => m.SheetPageModule)
    component:GetOtpComponent
  },
  {
    path: 'popup',
    // loadChildren: () => import('./pages/sheet/sheet.module').then( m => m.SheetPageModule)
    component:PopupComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
