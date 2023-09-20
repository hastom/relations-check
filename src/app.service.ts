import {Injectable, OnApplicationBootstrap} from '@nestjs/common';
import {Repository} from "typeorm";
import {UserEntity} from "./user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import * as util from "util";

@Injectable()
export class AppService implements OnApplicationBootstrap {

    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepo: Repository<UserEntity>
    ) {
    }

    getHello() {
        return 'Hello'
    }


    async onApplicationBootstrap() {
        const all = await this.usersRepo.find({
            relations: {
                devices: {
                    device: {
                        locations: {
                            comments: true
                        }
                    }
                }
            }
        })
        console.log(util.inspect(all, {maxArrayLength: null, depth: null, colors: true}))
    }
}
