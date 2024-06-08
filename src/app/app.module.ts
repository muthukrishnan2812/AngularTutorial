import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnCrudComponent } from './learn-crud/learn-crud.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormGetdataComponent } from './form-getdata/form-getdata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';
import { TableEditCrudComponent } from './table-edit-crud/table-edit-crud.component';
import { ModalComponent } from './modal/modal.component';
import { DemoComponent } from './demo/demo.component';
import { LodashComponent } from './lodash/lodash.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ImageOptimizeComponent } from './image-optimize/image-optimize.component';
import { NgOptimizedImage, provideImageKitLoader,provideImgixLoader } from '@angular/common';
import { CustomProvider } from 'firebase/app-check';
import { BehavioursubjectComponent } from './behavioursubject/behavioursubject.component';
import { LifecycleParentComponent } from './lifecycle-parent/lifecycle-parent.component';
import { LifecycleChildComponent } from './lifecycle-child/lifecycle-child.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { SignalComponent } from './signal/signal.component';

@NgModule({ declarations: [
        AppComponent,
        LearnCrudComponent,
        FormGetdataComponent,
        LearnRxjsComponent,
        TableEditCrudComponent,
        ModalComponent,
        DemoComponent,
        LodashComponent,
        ImageOptimizeComponent,
        BehavioursubjectComponent,
        LifecycleParentComponent,
        LifecycleChildComponent,
        LifecycleComponent,
        SignalComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgOptimizedImage,
        ReactiveFormsModule], providers: [
        provideClientHydration(),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
