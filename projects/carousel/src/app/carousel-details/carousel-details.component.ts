import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PhotoDetails } from '@app/models/photo-details';
import { PhotosService } from '@app/services/photos.service';

@Component({
  selector: 'app-image-preview',
  templateUrl: './carousel-details.component.html',
  styleUrls: ['./carousel-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselDetailsComponent implements OnInit {
  carousel?: { title: string; photos: PhotoDetails[] };
  currentPhotoIndex: number = 0;
  get currentPhoto() {
    return this.carousel?.photos[this.currentPhotoIndex];
  }
  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe({
      next: data => {
        this.carousel = data;
      },
    });
  }

  onPhotoChange({ newIndex }: { newIndex: number }) {
    this.currentPhotoIndex = newIndex;
  }
}
