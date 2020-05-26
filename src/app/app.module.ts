import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { TranslocoMessageFormatModule } from '@ngneat/transloco-messageformat'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    TranslocoMessageFormatModule.init({
      biDiSupport: true,
      customFormatters: { upcase: v => v.toUpperCase() },
      locales: 'en-US'
    }
    ),
    TranslocoLocaleModule.init({
      langToLocaleMapping: {
        en: 'en-US',
        es: 'es-ES'
      }
    })
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
