import { Injectable } from '@angular/core';
import { UserInfo } from '@app/models/user-info';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users?: UserInfo[];
  readonly UNKNOWN_USER: UserInfo = {
    id: -1,
    avatar: '',
    name: 'Unknown User',
  };
  constructor() {}

  MOCK_USERS: UserInfo[] = [
    { id: 1, name: 'Vahid Mohammadi', avatar: '' },
    { id: 2, name: 'Vahid Mohammadi', avatar: '' },
  ];
  getAllUsers() {
    return of(this.MOCK_USERS);
  }
  getUserById(id: number): Observable<UserInfo> {
    if (this.users) {
      return of(this.users.find(u => u.id === id) ?? this.UNKNOWN_USER);
    }

    return this.getAllUsers().pipe(
      switchMap(users => {
        this.users = users;
        return this.getUserById(id);
      }),
    );
  }
}
