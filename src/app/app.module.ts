import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FeaturedComponent } from './featured/featured.component';
import { ProductsComponent } from './products/products.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { Banner2Component } from './banner2/banner2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FeaturedComponent,
    ProductsComponent,
    BannerComponent,
    FooterComponent,
    NewslettersComponent,
    Banner2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
