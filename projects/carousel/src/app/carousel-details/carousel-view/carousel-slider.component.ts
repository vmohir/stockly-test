import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-view',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
