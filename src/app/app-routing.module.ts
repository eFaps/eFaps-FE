import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  //{ path: "", redirectTo: "ui", pathMatch: "full" },
  {
    path: "",
    loadChildren: () => import("./core/core.module").then((m) => m.CoreModule),
  },
  {
    path: "demo",
    loadChildren: () =>
      import("./layout/layout.module").then((m) => m.LayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
