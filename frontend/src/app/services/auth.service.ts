import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';

export interface AppTokenPayload extends JwtPayload {
	uid?: number;
	adminId?: number;
	companyId?: number;
	email: string;
	firstname?: string;
	lastname?: string;
	companyName?: string;
	role: 'user' | 'admin' | 'company';
	regType: 'email' | 'gmail';
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	setToken(token: string): void {
		localStorage.setItem('token', token);
	}
	
	getToken(): string | null {
		return localStorage.getItem('token');
	}

	decode(): AppTokenPayload | null {
		const token = this.getToken();
		if (!token) return null;

		try {
			return jwtDecode<AppTokenPayload>(token);
		} catch (e) {
			return null;
		}
	}

    isTokenExpired(): boolean {
        const payload = this.decode();
        if (!payload || !payload.exp) return true;

        const now = Math.floor(Date.now() / 1000);
        return payload.exp < now;
    }
	
    getUserId(): number | null {
        return this.decode()?.uid ?? null;
    }

    getUserEmail(): string | null {
        return this.decode()?.email ?? null;
    }

    getFullName(): string | null {
        const p = this.decode();
        if (!p) return null;

        return `${p.firstname} ${p.lastname}`;
    }

    getUserRole(): string | null {
        return this.decode()?.role ?? null;
    }

	isAdmin(): boolean {
		return this.decode()?.role === 'admin';
	}

	isCompany(): boolean {
		return this.decode()?.role === 'company';
	}

	isUser(): boolean {
		return this.decode()?.role === 'user';
	}

	isLoggedIn(): boolean {
        const token = this.getToken();
        if (!token) return false;

        if (this.isTokenExpired()) {
            this.logout();
            return false;
        }
        
        if (!this.decode()) return false;

        return true;
    }

	logout() {
		localStorage.removeItem('token');
	}
}
