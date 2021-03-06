import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  { path: "", redirectTo: "ui", pathMatch: "full" },
  {
    path: "ui",
    component: LayoutComponent,
    children: [
      {
        path: "wicket",
        loadChildren: () =>
          import("../wicket/wicket.module").then((m) => m.WicketModule),
        outlet: "layoutoutlet",
      },
      {
        path: "table",
        loadChildren: () =>
          import("../table/table.module").then((m) => m.TableModule),
        outlet: "layoutoutlet",
      },
      {
        path: "content",
        loadChildren: () =>
          import("../content/content.module").then((m) => m.ContentModule),
        outlet: "layoutoutlet",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
