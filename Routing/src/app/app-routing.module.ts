import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Button1Component } from './Components/button1/button1.component';
import { Button2Component } from './Components/button2/button2.component';

const routes: Routes = [
  {path:"button1",component: Button1Component},
  {path:"button2",component:Button2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
