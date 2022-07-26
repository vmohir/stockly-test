import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  currentPhoto?: PhotoDetails;
  constructor(private photosService: PhotosService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe({
      next: data => {
        this.carousel = data;
        this.currentPhoto = this.carousel.photos[0];
      },
    });
  }

  onPhotoChange({ newIndex }: { newIndex: number }) {
    this.currentPhoto = this.carousel?.photos[newIndex];
    this.cdr.detectChanges();
  }
}
