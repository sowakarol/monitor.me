import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    closeNav() {
        document.getElementById("side-bar").style.width = "0";
    }
}