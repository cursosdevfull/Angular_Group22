import * as jwt from 'jsonwebtoken';

const SECRET_KEY = "3lGigante2025?";

export function generateToken(payload: object, expiresIn: string = '1h'): string | undefined {
    try {
        const token = jwt.sign(payload, SECRET_KEY as jwt.Secret, {
            expiresIn: expiresIn,
            algorithm: 'HS256'
        } as jwt.SignOptions);
        return token;
    } catch (error) {
        console.error("Error generating token:", error);
        return undefined;
    }
}

const payload = {
    name: "John Doe",
    roles: ["USER"]
};

const accessToken = generateToken(payload, '1h');
console.log('Access Token:', accessToken);

