declare module 'shell/AuthService' {
  export class AuthService {
    getToken(): string | null;
    login(username: string, password: string): void;
    logout(): void;
    isLoggedIn(): boolean;
  }
}