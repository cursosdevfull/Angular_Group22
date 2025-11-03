export type UserType = {
    id: number
    username: string
    email: string
    role: 'admin' | 'teacher' | 'student'
}