import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {A11yModule} from '@angular/cdk/a11y';
import {NgModule} from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatNativeDateModule } from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
 exports: [
   A11yModule,
   CdkTableModule,
   CdkTreeModule,  
   MatButtonModule, 
   MatCardModule,
   MatCheckboxModule,   
   MatDatepickerModule,
   MatNativeDateModule,
   MatDialogModule,  
   MatExpansionModule,   
   MatIconModule,
   MatInputModule,
   MatListModule,
   MatMenuModule,   
   MatProgressBarModule,
   MatProgressSpinnerModule,
   MatRadioModule,   
   MatSelectModule,
   MatSidenavModule,  
   MatSnackBarModule,  
   MatTabsModule,
   MatToolbarModule,
   MatTooltipModule,
   MatFormFieldModule,
   MatBottomSheetModule,
   MatTableModule,
   MatBadgeModule, 
   FormsModule, 
   ReactiveFormsModule
 ]
})
export class MaterialModule {}