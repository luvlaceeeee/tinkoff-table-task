import {Injectable} from '@angular/core';
import {Observable, delay, of} from 'rxjs';
import {IUser} from './IUser';
import {mockUsers} from './users.mock';

@Injectable({providedIn: 'root'})
export class UserService {
    getUsers(): Observable<IUser[]> {
        return of(mockUsers).pipe(delay(3000));
    }
}
