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

    openOrCloseFriends(){
        var friendList = document.getElementById("friend-list");

        if(friendList.style.height === "0%"){
            friendList.style.height = "20%";
        } else {
            friendList.style.height = "0%";
        }
    }
}