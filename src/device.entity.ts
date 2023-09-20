import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DeviceLocationEntity} from "./device-location.entity";
import {UserDeviceEntity} from "./user-device.entity";

@Entity('devices')
export class DeviceEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    model: string

    @OneToMany(() => UserDeviceEntity, (ud) => ud.device)
    attachedUsers: UserDeviceEntity[]

    @OneToMany(() => DeviceLocationEntity, (dl) => dl.device)
    locations: DeviceLocationEntity[]
}