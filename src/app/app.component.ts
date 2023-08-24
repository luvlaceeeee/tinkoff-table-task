import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TuiRootModule} from '@taiga-ui/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, TuiRootModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {}
