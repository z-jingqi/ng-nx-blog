import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signin', loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninModule) }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }