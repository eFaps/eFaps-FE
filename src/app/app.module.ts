import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import localeFr from "@angular/common/locales/es";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { AngularSvgIconModule } from "angular-svg-icon";

import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ModalModule } from "./modal/modal.module";
import { SearchModule } from "./search/search.module";

registerLocaleData(localeFr, "es");
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SearchModule,
    ModalModule,
    AngularSvgIconModule.forRoot(),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
