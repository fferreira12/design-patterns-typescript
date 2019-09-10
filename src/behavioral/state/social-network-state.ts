export interface SocialNetworkState {
    login(user: string, password: string): boolean;
    post(text: string): void;
    logout(): void;
    Name: string;
}
