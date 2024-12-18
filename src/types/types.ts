export type User = {
    name: string;
    lastName: string;
    specialization: string;
    username: string;
    email: string;
} | null;

export type UserContextType = {
    user: User;
    setUser: (user: User) => void;
};