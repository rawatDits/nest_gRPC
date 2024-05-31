import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { UserServiceController , CreateUserDto, UpdateUserDto, UserServiceControllerMethods, Empty} from '@app/common';

@Controller()
@UserServiceControllerMethods()
export class UsersController implements UserServiceController{
  constructor(private readonly usersService: UsersService) {}

  async createUser(createUserDto: CreateUserDto) {
    return  this.usersService.create(createUserDto)
  }

  findAllUsers(request: Empty) {
    return this.usersService.findAll()
  }

  // @MessagePattern('findOneUser')
  // findOne(@Payload() id: number) {
  //   return this.usersService.findOne(id);
  // }

  // @MessagePattern('updateUser')
  // update(@Payload() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(updateUserDto.id, updateUserDto);
  // }

  // @MessagePattern('removeUser')
  // remove(@Payload() id: number) {
  //   return this.usersService.remove(id);
  // }
}
