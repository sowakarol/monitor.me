import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'friend-list',
    templateUrl: './friend-list.component.html',
    styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    closeFriends(){
        document.getElementById("friend-list").style.height = "0%";
    }
}