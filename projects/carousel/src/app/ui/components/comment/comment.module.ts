import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { UserComponent } from '@components/user/user.component';

@NgModule({
  declarations: [CommentFormComponent, CommentsComponent, CommentDetailsComponent],
  imports: [CommonModule, UserComponent],
  exports: [CommentsComponent],
})
export class CommentModule {}
