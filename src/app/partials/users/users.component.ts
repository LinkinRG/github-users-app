import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { MainService } from '../../services/main.service';
import { Subscription } from 'rxjs';
import { ICONS } from '../../utils';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss']
})

export class UsersComponent implements OnInit, OnDestroy {
  public iconPath: string = ICONS;
  public userList: User[] = [];
  public loading: boolean = true;

  private getUsersSubscription: Subscription;
  private page: number = 0;
  private userPerPage: number = 20;

  constructor(private mainService: MainService) {
  }

  public ngOnInit(): void {
    this.getUserList(null);
  }

  public ngOnDestroy(): void {
    if (this.getUsersSubscription) {
      this.getUsersSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll', [])
  public onScroll(): void {
    // console.log(window.scrollY, window.document.body.clientHeight);
    if (!this.loading && (window.scrollY >= (window.document.body.clientHeight - 1100))) {
      // console.log(this.userList[this.userList.length - 1].id);
      this.getUserList(this.userList[this.userList.length - 1].id);
    }
  }

  private getUserList(lastId): void {
    this.loading = true;
    this.getUsersSubscription = this.mainService.getUserList(lastId).subscribe(
      (response) => {
        this.userList = [...this.userList, ...response.map((user) => {
          return { username: user.login, avatar: user.avatar_url, id: user.id };
        })];
        this.loading = false;
      }
    );
  }
}
