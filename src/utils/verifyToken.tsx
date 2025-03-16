import { jwtDecode, JwtPayload } from 'jwt-decode';

interface CustomJwtPayload extends JwtPayload {
  id: string;
  role: string;
  email: string;
  iat: number;
  exp: number;
}

export const verifyToken = (token: string): CustomJwtPayload => {
  return jwtDecode(token);
};