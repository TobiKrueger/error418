import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgbComponent } from './agb/agb.component';
import { LoadingComponent } from './loading/loading.component';
import { LanguageComponent } from './language/language.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MaterialModule } from '../material.module';
import { DownloadsComponent } from './downloads/downloads.component';
import { CertificateComponent } from './certificate/certificate.component';

@NgModule({
  declarations: [AgbComponent, LoadingComponent, LanguageComponent, NotfoundComponent, DownloadsComponent, CertificateComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:
  [AgbComponent],
})
export class LevelModule { }
