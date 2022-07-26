import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetails } from '@app/models/photo-details';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageSliderComponent implements OnInit {
  @Input() sliderTitle = 'Roads of Asia';
  @Input() images: PhotoDetails[] = [];
  currentSlideIndex = 0;
  @Output() photoChange = new EventEmitter<{ newIndex: number }>();
  constructor() {}

  ngOnInit(): void {}

  slideLeft() {
    this.currentSlideIndex = Math.max(0, this.currentSlideIndex - 1);
  }
  slideRight() {
    this.currentSlideIndex = Math.min(this.images.length - 1, this.currentSlideIndex + 1);
  }
}
