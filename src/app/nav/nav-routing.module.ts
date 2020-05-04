import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardinalComponent } from "./cardinal/cardinal.component";

const routes: Routes = [{ path: "", component: CardinalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavRoutingModule {}
