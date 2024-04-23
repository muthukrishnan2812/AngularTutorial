import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnCrudComponent } from './learn-crud/learn-crud.component';
import { FormGetdataComponent } from './form-getdata/form-getdata.component';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';
import { TableEditCrudComponent } from './table-edit-crud/table-edit-crud.component';
import { ModalComponent } from './modal/modal.component';
import { LodashComponent } from './lodash/lodash.component';

const routes: Routes = [
  {
    path:'',
    component:LearnCrudComponent
  },
  {
    path:'form',
    component:FormGetdataComponent
  },
  {
    path:'rxjs',
    component:LearnRxjsComponent
  },
  {
    path:'edit',
    component:TableEditCrudComponent
  },
  {
    path:'modal',
    component:ModalComponent
  },
  {
    path:'lodash',
    component:LodashComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
