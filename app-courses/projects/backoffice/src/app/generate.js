"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = generateToken;
var jwt = require("jsonwebtoken");
var SECRET_KEY = "3lGigante2025?";
function generateToken(payload, expiresIn) {
    if (expiresIn === void 0) { expiresIn = '1h'; }
    try {
        var token = jwt.sign(payload, SECRET_KEY, {
            expiresIn: expiresIn,
            algorithm: 'HS256'
        });
        return token;
    }
    catch (error) {
        console.error("Error generating token:", error);
        return undefined;
    }
}
// Generar el token específico que solicitas
var payload = {
    name: "John Doe",
    roles: ["USER"]
};
var accessToken = generateToken(payload, '1h');
console.log('Access Token:', accessToken);
