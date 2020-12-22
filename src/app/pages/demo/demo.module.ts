import { SquareComponent } from './components/square/square.component';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DemoRoutingModule,
  ],
  declarations: [DemoComponent, SquareComponent],
  entryComponents: [],
  providers: [],
})
export class DemoModule {}
