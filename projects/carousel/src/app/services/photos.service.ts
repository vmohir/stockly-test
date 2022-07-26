import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import mockPhotos from '../../assets/mock-photos.json';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor() {}

  getPhotos() {
    return of(mockPhotos);
  }
}
