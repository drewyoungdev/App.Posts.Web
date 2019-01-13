import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkComponent } from './framework/framework.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FrameworkComponent, 
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FrameworkComponent
  ]
})
export class FrameworkModule { }
