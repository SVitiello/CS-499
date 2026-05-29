import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalSearch } from './features/animals/animal-search/animal-search';
import { Login } from './features/auth/login/login';

// Routes to login page on startup.
// Also includes route for login page separately, and search page
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'animals', component: AnimalSearch}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
