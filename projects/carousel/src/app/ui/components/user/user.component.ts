import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfo } from '@app/models/user-info';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  @Input() userId!: number;
  user?: UserInfo;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  private getUserInfo() {
    this.userService.getUserById(this.userId).subscribe({
      next: user => {
        this.user = user;
      },
    });
  }
}
