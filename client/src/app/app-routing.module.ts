import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'explore', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: '**', pathMatch: 'full', 
        component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
