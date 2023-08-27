import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";
import { RegisterComponent } from "./register/register.component";

const appRoutes: Routes = [
    {path: '', component: NewsComponent},
    {path: 'home', component: NewsComponent},
    {path: 'registro', component: RegisterComponent},
    {path: '**', component: NewsComponent}
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);