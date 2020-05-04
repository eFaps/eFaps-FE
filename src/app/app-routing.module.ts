import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  //{ path: "", redirectTo: "ui", pathMatch: "full" },
  {
    path: "",
    loadChildren: () =>
      import("./core/core.module").then(m => m.CoreModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
