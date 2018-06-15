import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot()
  ],
  entryComponents: [TestComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
