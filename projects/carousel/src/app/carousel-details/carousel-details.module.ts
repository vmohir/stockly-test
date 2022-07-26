import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselDetailsRoutingModule } from './carousel-details-routing.module';
import { CarouselDetailsComponent } from './carousel-details.component';
import { PageLayoutComponent } from '@components/page-layout/page-layout.component';
import { CarouselInfoComponent } from './carousel-info/carousel-info.component';
import { UserComponent } from '@components/user/user.component';
import { CommentModule } from '@components/comment/comment.module';
import { CarouselSliderComponent } from './carousel-view/carousel-slider.component';
import { ImageSliderComponent } from '@components/image-slider/image-slider.component';

@NgModule({
  declarations: [CarouselDetailsComponent, CarouselInfoComponent, CarouselSliderComponent],
  imports: [
    CommonModule,
    CarouselDetailsRoutingModule,
    PageLayoutComponent,
    UserComponent,
    CommentModule,
    ImageSliderComponent,
  ],
})
export class CarouselDetailsModule {}
