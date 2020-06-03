import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { IfStructureComponent } from './if-structure/if-structure.component';
import { SwitchStructureComponent } from './switch-structure/switch-structure.component';
import { ForStructureComponent } from './for-structure/for-structure.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    IfStructureComponent,
    SwitchStructureComponent,
    ForStructureComponent,
    PipesComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
