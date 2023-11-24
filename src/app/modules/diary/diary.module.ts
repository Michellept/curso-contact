import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryRoutingModule } from './diary-routing.module';
import { ListContactComponent } from './pages/list-contact/list-contact.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { ContactIdComponent } from './pages/contact-id/contact-id.component';


@NgModule({
  declarations: [
    ListContactComponent,
    NewContactComponent,
    ContactIdComponent,
  ],
  imports: [
    CommonModule,
    DiaryRoutingModule
  ]
})
export class DiaryModule { }
