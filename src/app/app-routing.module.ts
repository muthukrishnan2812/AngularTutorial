import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnCrudComponent } from './learn-crud/learn-crud.component';
import { FormGetdataComponent } from './form-getdata/form-getdata.component';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';
import { TableEditCrudComponent } from './table-edit-crud/table-edit-crud.component';
import { ModalComponent } from './modal/modal.component';
import { LodashComponent } from './lodash/lodash.component';
import { DemoComponent } from './demo/demo.component';
import { ImageOptimizeComponent } from './image-optimize/image-optimize.component';
import { BehaviorSubject } from 'rxjs';
import { BehavioursubjectComponent } from './behavioursubject/behavioursubject.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { SignalComponent } from './signal/signal.component';

const routes: Routes = [
  {
    path:'learn',
    component:LearnCrudComponent
  },
  // {
  //   path:'',
  //   redirectTo:'/learn',
  //   pathMatch:"prefix"
  // },
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
  },
  {
    path:'demo',
    component:DemoComponent
  },
  {
    path:'image',
    component:ImageOptimizeComponent
  },
  {
    path:'subject',
    component:BehavioursubjectComponent
  },
  {
    path:'lifecycle',
    component:LifecycleComponent
  },
  {
    path:'signal',
    component:SignalComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
