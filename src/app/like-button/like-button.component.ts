import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {
  @Input('isLiked') isLiked: boolean;
  @Input('likesCount') likesCount: number;

  onClick() {
    this.likesCount += (this.isLiked) ? -1 : 1;
    this.isLiked = !this.isLiked;

  }
}
