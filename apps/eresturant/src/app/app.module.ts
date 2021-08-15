import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {UiModule} from '@jnresturant/ui';
import {ButtonModule} from 'primeng/button';


const router:Routes = [
  {path: '', component: HomePageComponent},
  {path: 'products', component: ProductListComponent}, 
];

@NgModule({
  declarations: [AppComponent, HomePageComponent, ProductListComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule,BrowserAnimationsModule, RouterModule.forRoot(router), UiModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
