import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const  routers: Routes = [
  {
    path:'',
    component: ShellComponent,
    children: [
      {
        path:'dashboard',
        component:DashboardComponent
      }
    ]
  }
]

@NgModule({
  declarations: [AppComponent, ShellComponent, SidebarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers, { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
