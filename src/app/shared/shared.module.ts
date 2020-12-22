import { NgModule } from '@angular/core';
import { LoadingComponent } from './components';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [LoadingComponent],
  declarations: [LoadingComponent],
  providers: [],
})
export class SharedModule {}
