import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgbComponent } from './agb/agb.component';
import { LoadingComponent } from './loading/loading.component';
import { LanguageComponent } from './language/language.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [AgbComponent, LoadingComponent, LanguageComponent, NotfoundComponent],
  imports: [
    CommonModule
  ],
  exports:
  [AgbComponent],
})
export class LevelModule { }
