import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { AppMainComponent } from './app-main/app-main.component';
import { AppTopbarComponent } from './app-topbar/app-topbar.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SidebarComponent,
    AppMainComponent,
    AppTopbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzDividerModule
    
  ],
  exports:[
    AppMainComponent
  ]
})
export class AppMainModule { }
