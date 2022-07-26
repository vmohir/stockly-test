import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselDetailsComponent } from './carousel-details.component';

const routes: Routes = [{ path: '', component: CarouselDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarouselDetailsRoutingModule {}
