import { Injectable } from '@angular/core';
import { UserType } from './user-type';
import { BaseService } from '../core/services/base';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<UserType> {
  readonly dataSourceOriginal: UserType[] = [
    { id: 1, username: 'admin001', email: 'admin001@example.com', role: 'admin' },
    { id: 2, username: 'teacher001', email: 'teacher001@example.com', role: 'teacher' },
    { id: 3, username: 'student001', email: 'student001@example.com', role: 'student' },
    { id: 4, username: 'admin002', email: 'admin002@example.com', role: 'admin' },
    { id: 5, username: 'teacher002', email: 'teacher002@example.com', role: 'teacher' },
    { id: 6, username: 'student002', email: 'student002@example.com', role: 'student' },
    { id: 7, username: 'teacher003', email: 'teacher003@example.com', role: 'teacher' },
    { id: 8, username: 'student003', email: 'student003@example.com', role: 'student' },
    { id: 9, username: 'student004', email: 'student004@example.com', role: 'student' },
    { id: 10, username: 'admin003', email: 'admin003@example.com', role: 'admin' },
    { id: 11, username: 'teacher004', email: 'teacher004@example.com', role: 'teacher' },
    { id: 12, username: 'student005', email: 'student005@example.com', role: 'student' },
    { id: 13, username: 'teacher005', email: 'teacher005@example.com', role: 'teacher' },
    { id: 14, username: 'student006', email: 'student006@example.com', role: 'student' },
    { id: 15, username: 'admin004', email: 'admin004@example.com', role: 'admin' },
    { id: 16, username: 'teacher006', email: 'teacher006@example.com', role: 'teacher' },
    { id: 17, username: 'student007', email: 'student007@example.com', role: 'student' },
    { id: 18, username: 'student008', email: 'student008@example.com', role: 'student' },
    { id: 19, username: 'teacher007', email: 'teacher007@example.com', role: 'teacher' },
    { id: 20, username: 'student009', email: 'student009@example.com', role: 'student' },
    { id: 21, username: 'admin005', email: 'admin005@example.com', role: 'admin' },
    { id: 22, username: 'teacher008', email: 'teacher008@example.com', role: 'teacher' },
    { id: 23, username: 'student010', email: 'student010@example.com', role: 'student' },
    { id: 24, username: 'teacher009', email: 'teacher009@example.com', role: 'teacher' },
    { id: 25, username: 'student011', email: 'student011@example.com', role: 'student' },
    { id: 26, username: 'student012', email: 'student012@example.com', role: 'student' },
    { id: 27, username: 'admin006', email: 'admin006@example.com', role: 'admin' },
    { id: 28, username: 'teacher010', email: 'teacher010@example.com', role: 'teacher' },
    { id: 29, username: 'student013', email: 'student013@example.com', role: 'student' },
    { id: 30, username: 'teacher011', email: 'teacher011@example.com', role: 'teacher' },
    { id: 31, username: 'student014', email: 'student014@example.com', role: 'student' },
    { id: 32, username: 'admin007', email: 'admin007@example.com', role: 'admin' },
    { id: 33, username: 'teacher012', email: 'teacher012@example.com', role: 'teacher' },
    { id: 34, username: 'student015', email: 'student015@example.com', role: 'student' },
    { id: 35, username: 'student016', email: 'student016@example.com', role: 'student' },
    { id: 36, username: 'teacher013', email: 'teacher013@example.com', role: 'teacher' },
    { id: 37, username: 'student017', email: 'student017@example.com', role: 'student' },
    { id: 38, username: 'admin008', email: 'admin008@example.com', role: 'admin' },
    { id: 39, username: 'teacher014', email: 'teacher014@example.com', role: 'teacher' },
    { id: 40, username: 'student018', email: 'student018@example.com', role: 'student' },
    { id: 41, username: 'teacher015', email: 'teacher015@example.com', role: 'teacher' },
    { id: 42, username: 'student019', email: 'student019@example.com', role: 'student' },
    { id: 43, username: 'student020', email: 'student020@example.com', role: 'student' },
    { id: 44, username: 'admin009', email: 'admin009@example.com', role: 'admin' },
    { id: 45, username: 'teacher016', email: 'teacher016@example.com', role: 'teacher' },
    { id: 46, username: 'student021', email: 'student021@example.com', role: 'student' },
    { id: 47, username: 'teacher017', email: 'teacher017@example.com', role: 'teacher' },
    { id: 48, username: 'student022', email: 'student022@example.com', role: 'student' },
    { id: 49, username: 'admin010', email: 'admin010@example.com', role: 'admin' },
    { id: 50, username: 'teacher018', email: 'teacher018@example.com', role: 'teacher' }
  ];
}
