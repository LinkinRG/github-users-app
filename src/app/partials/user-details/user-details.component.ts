import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MainService } from '../../services/main.service';
import { User } from '../../models/user';
import { ICONS } from '../../utils';

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.component.html',
  styleUrls: ['user-details.component.scss']
})

export class UserDetailsComponent implements OnInit, OnDestroy {
  public iconPath: string = ICONS;
  public user: User = new User();
  public activeList: any = [];
  public selectedMenu: string = 'REPOS';
  public loading: boolean = false;

  private paramSubcription: Subscription;
  private getUserDetailsSubscription: Subscription;
  private getFollowersSubscription: Subscription;
  private getReposSubscription: Subscription;
  private getFollowingSubscription: Subscription;
  private page: number = 0;
  private perPage: number = 20;

  constructor(private route: ActivatedRoute, private mainService: MainService) {
  }

  ngOnInit() {
    this.paramSubcription = this.route.params.subscribe(
      (params) => {
        this.getUserDetails(params.username);
      }
    );
  }

  public ngOnDestroy(): void {
    if (this.paramSubcription) {
      this.paramSubcription.unsubscribe();
    }
    if (this.getUserDetailsSubscription) {
      this.getUserDetailsSubscription.unsubscribe();
    }
    if (this.getFollowersSubscription) {
      this.getFollowersSubscription.unsubscribe();
    }
    if (this.getReposSubscription) {
      this.getReposSubscription.unsubscribe();
    }
    if (this.getFollowingSubscription) {
      this.getFollowingSubscription.unsubscribe();
    }
  }

  public selectMenu(menu: string): void {
    if (menu === this.selectedMenu) {
      return;
    }
    this.activeList = [];
    this.page = 0;
    this.selectedMenu = menu;
    switch (menu) {
      case 'REPOS':
        this.getRepositories();
        break;
      case 'FOLLOWING':
        this.getFollowing();
        break;
      case 'FOLLOWERS':
        this.getFollowers();
        break;
    }
  }

  @HostListener('window:scroll', [])
  public onScroll(): void {
    // console.log(window.scrollY, window.document.body.clientHeight);
    if (!this.loading && (window.scrollY >= (window.document.body.clientHeight - 1100))) {
      // console.log(this.userList[this.userList.length - 1].id);
      switch (this.selectedMenu) {
        case 'REPOS':
          if (this.activeList.length < this.user.repositoriesAmount) {
            this.getRepositories();
          }
          break;
        case 'FOLLOWING':
          if (this.activeList.length < this.user.followingAmount) {
            this.getFollowing();
          }
          break;
        case 'FOLLOWERS':
          if (this.activeList.length < this.user.followersAmount) {
            this.getFollowers();
          }
          break;
      }
    }
  }

  private getUserDetails(username): void {
    this.getUserDetailsSubscription = this.mainService.getUserDetails(username).subscribe(
      (response) => {
        this.user = {
          ...new User(),
          username: response.login,
          avatar: response.avatar_url,
          followersAmount: response.followers,
          followingAmount: response.following,
          repositoriesAmount: response.public_repos,
        };
        this.getRepositories();
      }
    );
  }

  private getFollowers(): void {
    this.loading = true;
    this.getFollowersSubscription = this.mainService.getUserFollowers(this.user.username, ++this.page, this.perPage).subscribe(
      (response) => {
        this.activeList = [...this.activeList, ...response.map((user) => {
          return { username: user.login, avatar: user.avatar_url, id: user.id };
        })];
        this.loading = false;
      }
    );
  }

  private getFollowing(): void {
    this.loading = true;
    this.getFollowingSubscription = this.mainService.getUserFollowing(this.user.username, ++this.page, this.perPage).subscribe(
      (response) => {
        this.activeList = [...this.activeList, ...response.map((user) => {
          return { username: user.login, avatar: user.avatar_url, id: user.id };
        })];
        this.loading = false;
      }
    );
  }

  private getRepositories(): void {
    this.loading = true;
    this.getReposSubscription = this.mainService.getUserRepos(this.user.username, ++this.page, this.perPage).subscribe(
      (response) => {
        this.activeList = [...this.activeList, ...response.map((user) => {
          return { name: user.name, id: user.id };
        })];
        this.loading = false;
      }
    );
  }
}
