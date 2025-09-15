import { Component } from "@angular/core";

@Component({
    selector: "cdev-register",
    template: `
        <h2>Register</h2>
        <span>{{email}}</span>
    `
})
export class Register {
    name: string = "Peter Parker";
    email: string = "peter.parker@example.com";
    password: string = "password123";
    age: number = 34;
    gender: string = "Male";
}