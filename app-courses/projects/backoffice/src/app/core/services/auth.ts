import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { jwtDecode } from "jwt-decode"

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private router = inject(Router);

    private readonly validUsers = [
        {
            email: 'sergio@company.com', password: 'pass1234', token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2VyZ2lvIEhpZGFsZ28iLCJyb2xlcyI6WyJBRE1JTiIsIlVTRVIiXSwiaWF0IjoxNzYyMTMwMDA2LCJleHAiOjE3NjIxMzM2MDZ9.NZwN5tMpvXfR7MKBv_ZwuDToSag5HnpMq0vonM9i2Bw"
        },
        {
            email: 'john@company.com', password: 'pass5678', token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTc2MjEzMDEzNSwiZXhwIjoxNzYyMTMzNzM1fQ.9RoEVroqK- eikfkFFfDXAo19193G446UQ3iDsx - 0K_U"
        }
    ]

    login(email: string, password: string): string | null {
        const userFound = this.validUsers.find(u => u.email === email && u.password === password);

        return userFound ? userFound.token : null;
    }

    isLoggedIn(): boolean {
        const token = sessionStorage.getItem("token");
        return !!token;
    }

    logout(): void {
        sessionStorage.removeItem("token");
        this.router.navigate(["/login"]);
    }

    /*  getUserRoles(): string[] {
         const token = sessionStorage.getItem("token");
         if (!token) return [];
 
         try {
             const decodedToken = jwt.decode(token) as { [key: string]: any };
             return decodedToken && decodedToken["roles"] ? decodedToken["roles"] : [];
         } catch (error) {
             return [];
         }
     } */

    getUserName(): string | null {
        const token = sessionStorage.getItem("token");
        if (!token) return null;
        try {
            const payload = jwtDecode(token) as { [key: string]: any };
            return payload && payload["name"] ? payload["name"] : null;
        } catch (error) {
            return null;
        }
    }

    lockSession(): void {
        this.router.navigate(["/lock-session"]);
    }
}