import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IUser} from '@api/IUser';
import {UserService} from '@api/user.service';
import {TuiTableModule} from '@taiga-ui/addon-table';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiLoaderModule} from '@taiga-ui/core';
import {TuiHighlightModule, TuiInputModule} from '@taiga-ui/kit';

@Component({
    selector: 'app-users-table',
    standalone: true,
    imports: [
        CommonModule,
        TuiTableModule,
        TuiLetModule,
        TuiInputModule,
        TuiHighlightModule,
        TuiLoaderModule,
        FormsModule,
    ],
    templateUrl: './users-table.component.html',
    styleUrls: ['./users-table.component.less'],
})
export class UsersTableComponent {
    readonly Column = {
        Name: 'name',
        Age: 'age',
        Sex: 'sex',
    };
    readonly columns = [this.Column.Name, this.Column.Age, this.Column.Sex];

    search = '';

    readonly users$ = this.userService.getUsers();

    filterUsers(users: IUser[], searchQuery: string) {
        if (searchQuery) {
            return users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        return users;
    }

    constructor(private readonly userService: UserService) {}
}
