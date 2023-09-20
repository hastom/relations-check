import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UserDeviceEntity} from "./user-device.entity";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => UserDeviceEntity, (d) => d.user)
    devices: UserDeviceEntity[]
}