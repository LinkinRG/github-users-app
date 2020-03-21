import { Repository } from './repository';

export class User {
  public id: number = null;
  public username: string = '';
  public avatar: string = '';
  public followersAmount: number = 0;
  public followers: User[] = [];
  public followingAmount: number = 0;
  public following: User[] = [];
  public repositoriesAmount: number = 0;
  public repositories: Repository[] = [];
}
