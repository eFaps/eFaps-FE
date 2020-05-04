import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PageWrapperComponent } from "./page-wrapper/page-wrapper.component";

const routes: Routes = [
  {
    path: "",
    component: PageWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WicketRoutingModule {}
