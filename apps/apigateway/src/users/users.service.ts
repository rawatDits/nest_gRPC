import { OnModuleInit, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto, AUTH_PACKAGE_NAME, USER_SERVICE_NAME, UserServiceClient} from '@app/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class UsersService implements OnModuleInit {
  private usersService: UserServiceClient;
  constructor(@Inject(AUTH_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.usersService =this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  create(createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  findAll() {
    return this.usersService.findAllUsers({});
  }
}
