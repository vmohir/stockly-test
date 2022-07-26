import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Comment } from '@app/models/photo-details';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentDetailsComponent implements OnInit {
  @Input() comment!: Comment;
  constructor() {}

  ngOnInit(): void {}
}
