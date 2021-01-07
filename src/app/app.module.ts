import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './workspace/components/clients/clients.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ClientsService } from './modules/shared/services/clients.service';
import { environment } from 'src/environments/environment.prod';
import { CheckboxModule } from 'primeng/checkbox';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AddDialog } from './workspace/components/clients/forms/add.dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AnalysisComponent } from './workspace/components/analysis/analysis.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AddDialog,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    ModalModule.forRoot(),
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [
    ClientsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddDialog]
})
export class AppModule { }
