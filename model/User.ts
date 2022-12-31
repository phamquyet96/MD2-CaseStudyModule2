export class User{
    private username: string;
    private password: string;
    private role: number;


    constructor(username: string, password: string, role: number) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    getUsername(): string {
        return this.username;
    }

    setUsername(value: string) {
        this.username = value;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(value: string) {
        this.password = value;
    }

    getRole(): number {
        return this.role;
    }

    setRole(value: number) {
        this.role = value;
    }
}