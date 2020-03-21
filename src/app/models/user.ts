import { Repository } from './repository';

export class User {
  public id: number = null;
  public username: string = '';
  public avatar: string = '';
  public followers: User[] = [];
  public following: User[] = [];
  public repositories: Repository[] = [];
}
