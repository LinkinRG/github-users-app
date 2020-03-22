import { Component, HostListener, OnInit } from '@angular/core';
import { Repository } from '../../models/repository';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-repository-page',
  templateUrl: 'repository-page.component.html',
  styleUrls: ['repository-page.component.scss']
})

export class RepositoryPageComponent implements OnInit {
  public repo: Repository = new Repository();
  public loading: boolean = true;

  private paramSubcription: Subscription;
  private getRepoSubscription: Subscription;
  private getContributorsSubscription: Subscription;
  private page: number = 0;
  private perPage: number = 20;
  private noMoreContributors: boolean = false;


  constructor(private route: ActivatedRoute, private mainService: MainService) {
  }

  ngOnInit() {
    this.paramSubcription = this.route.params.subscribe(
      (params) => {
        this.getRepository(params.owner + '/' + params.name);
      }
    );
  }

  @HostListener('window:scroll', [])
  public onScroll(): void {
    // console.log(window.scrollY, window.document.body.clientHeight);
    if (!this.loading && (window.scrollY >= (window.document.body.clientHeight - 1100))) {
      // console.log(this.userList[this.userList.length - 1].id);
      if (!this.noMoreContributors) {
        this.getContributors();
      }
    }
  }

  private getRepository(url: string): void {
    this.getRepoSubscription = this.mainService.getRepository(url).subscribe(
      (response) => {
        this.repo = {
          ...new Repository(),
          name: response.name,
          url: response.full_name
        };
        this.getContributors();
      }
    );
  }

  private getContributors(): void {
    this.loading = true;
    this.getContributorsSubscription = this.mainService.getContributors(this.repo.url, ++this.page, this.perPage).subscribe(
      (response) => {
        if (response.length > 0) {
          this.repo.contributors = [...this.repo.contributors, ...response.map((user) => {
            return { username: user.login, avatar: user.avatar_url, id: user.id };
          })];
        } else {
          this.noMoreContributors = true;
        }
        this.loading = false;
      }
    );
  }
}
