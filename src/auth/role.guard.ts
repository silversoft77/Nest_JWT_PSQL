import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { User } from './user.entity';
import { UserRole } from './dto/auth-credentials.dto';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requireRoles = this.reflector.getAllAndOverride<UserRole[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requireRoles) {
      return true;
    }

    const users: User[] = [
      {
        id: '11111',
        username: 'James',
        password: '123456',
        role: [UserRole.ADMIN],
      },
      {
        id: '22222',
        username: 'John',
        password: '123456',
        role: [UserRole.NORMAL],
      },
      {
        id: '33333',
        username: 'Tony',
        password: '123456',
        role: [UserRole.LIMITED],
      },
    ];
    
    return requireRoles.some((role) => users[0].role.includes(role));
  }
}
