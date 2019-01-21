import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkComponent } from './framework/framework.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SnotifyModule, ToastDefaults, SnotifyService } from 'ng-snotify';
import { NotificationService } from '../services/notification.service';

@NgModule({
  declarations: [
    FrameworkComponent, 
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SnotifyModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    NotificationService
  ],
  exports: [
    FrameworkComponent
  ]
})
export class FrameworkModule { }
