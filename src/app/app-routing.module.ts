import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/table', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
