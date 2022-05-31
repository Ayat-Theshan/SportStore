import { Component } from "@angular/core";
import { AuthService } from "../model/auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: "admin.component.html"
})

export class AdminComponent {
    constructor (private router:Router,private auth:AuthService){}

    logout() {
        this.auth.clear();
        this.router.navigateByUrl("/");
        }
}