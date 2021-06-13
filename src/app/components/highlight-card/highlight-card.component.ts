import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-highlight-card',
    templateUrl: './highlight-card.component.html',
    styleUrls: ['./highlight-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightCardComponent implements OnInit {

    @Input() title: string = '';

    constructor() { }

    ngOnInit(): void {
    }

}
