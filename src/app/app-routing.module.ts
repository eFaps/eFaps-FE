import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "layout",
    loadChildren: () =>
      import("./layout/layout.module").then((m) => m.LayoutModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./nav/nav.module").then((m) => m.NavModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
