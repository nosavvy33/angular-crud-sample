import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from './workspace/components/analysis/analysis.component';
import { ClientsComponent } from './workspace/components/clients/clients.component';

const routes: Routes = [
  { path: 'analysis', component: AnalysisComponent },
  { path: 'clients', component: ClientsComponent },
  { path: '', redirectTo: '/clients', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
