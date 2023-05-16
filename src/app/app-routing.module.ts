import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FormRenderComponent } from './components/form-render/form-render.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'form', component: FormRenderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
