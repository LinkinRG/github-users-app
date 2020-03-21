import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../utils';
import { last } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MainService {

  constructor(private http: HttpClient) {
  }

  public getUserList(lastId: number): Observable<any> {
    if (lastId) {
      return this.http.get(`${API}users?since=${lastId}`);
    } else {
      return this.http.get(`${API}users`);
    }
  }

  public getUserDetails(username: string): Observable<any> {
    return this.http.get(`${API}users/${username}`);
  }

  public getUserRepos(username: string, page: number, perPage: number): Observable<any> {
    return this.http.get(`${API}users/${username}/repos?page=${page}&per_page=${perPage}`);
  }

  public getUserFollowers(username: string, page: number, perPage: number): Observable<any> {
    return this.http.get(`${API}users/${username}/followers?page=${page}&per_page=${perPage}`);
  }

  public getUserFollowing(username: string, page: number, perPage: number): Observable<any> {
    return this.http.get(`${API}users/${username}/following?page=${page}&per_page=${perPage}`);
  }
}
