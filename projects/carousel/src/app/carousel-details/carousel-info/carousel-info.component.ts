import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PhotoDetails } from '@app/models/photo-details';

@Component({
  selector: 'app-carousel-info',
  templateUrl: './carousel-info.component.html',
  styleUrls: ['./carousel-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselInfoComponent implements OnInit {
  @Input() carousel!: PhotoDetails;
  constructor() {}

  ngOnInit(): void {}
}
