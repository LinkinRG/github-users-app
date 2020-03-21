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
    return this.http.get(`${API}user/${username}`);
  }

  public getUserRepos(username: string): Observable<any> {
    return this.http.get(`${API}user/${username}/repos`);
  }

  public getUserFollowers(username: string): Observable<any> {
    return this.http.get(`${API}user/${username}/repos`);
  }

  public getUserFollowing(username: string): Observable<any> {
    return this.http.get(`${API}user/${username}/repos`);
  }
}
