import { Component } from "@angular/core";

@Component({
    selector: "cdev-login",
    templateUrl: "./login.html",
    styleUrls: ["./login.css"],
    /*     template: `
            <h1>Login</h1>
            <input type='email' placeholder='Email'><br>
            <input type='password' placeholder='Password'><br>
            <button>Login</button>
        `, */
    //styles: ["h1 { color: blue; font-family: Verdana; }"]
})
export class Login {
    email: string;
    password: string;

    constructor() {
        this.email = "carla.buendia@example.com"
        this.password = "12345"
    }

    getDomain() {
        return this.email.split('@')[1];
    }
}