import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
    import('../app/modules/login/login.module').then((m) => m.LoginModule),

  },
  {
    path: '',
    loadChildren: () =>
    import('../app/modules/diary/diary.module').then((m) => m.DiaryModule),

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
