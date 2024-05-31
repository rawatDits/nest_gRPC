import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  User,
  CreateUserDto,
  Users,
} from '@app/common';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService implements OnModuleInit {
  private readonly users: User[] = [];

  onModuleInit() {
    for (let i = 0; i <= 100; i++) {
      this.create({ username: randomUUID(), password: randomUUID(), age: 0 });
    }
  }

  create(createUserDto: CreateUserDto): User {
    const user: User = {
      ...createUserDto,
      isSubscribed: false,
      socialMedia: {twitterUri:"http://twitter.com" ,fbUri:"https://fb.com"},
      id: randomUUID(),
    };
    this.users.push(user);
    return user;
  }

  findAll(): Users {
    return { users: this.users };
  }

}