import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/*const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/hello/hello.module').then( m => m.HelloPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login-arabic',
    loadChildren: () => import('./pages/home-a/home-a.module').then( m => m.HomeAPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  /*
  {
    path: 'hello',
    loadChildren: () => import('./pages/hello/hello.module').then( m => m.HelloPageModule)
  },*/



  /*
  {
    path: 'home-e',
    loadChildren: () => import('./pages/home-e/home-e.module').then( m => m.HomeEPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'english',
    loadChildren: () => import('./english/english.module').then( m => m.EnglishPageModule)
  },
  {
    path: 'arabic',
    loadChildren: () => import('./arabic/arabic.module').then( m => m.ArabicPageModule)
  },
 



];
*/


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },

{
  path: 'helloA',
  loadChildren: () => import('./pages/hello/hello.module').then( m => m.HelloPageModule)
},








 
  {
    path: 'home-a',
    loadChildren: () => import('./pages/home-a/home-a.module').then( m => m.HomeAPageModule)
  },

  {
    path: 'welcome',
    loadChildren: () => import('./pages/hello/hello.module').then( m => m.HelloPageModule)
  },

  {
    path: 'hellolink',
    loadChildren: () => import('./pages/hello/hello.module').then( m => m.HelloPageModule)
  },


/*
  {
    path: 'home-e',
    loadChildren: () => import('./pages/home-e/home-e.module').then( m => m.HomeEPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule)
  },*/
 
 


];












@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
