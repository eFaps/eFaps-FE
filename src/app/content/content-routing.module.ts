import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { ContentResolverService } from "../services";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    resolve: {
      content: ContentResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
