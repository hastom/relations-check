import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "./user.entity";
import {DeviceEntity} from "./device.entity";

@Entity('users_devices')
export class UserDeviceEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'issued_at', type: 'timestamptz'})
    issuedAt: Date

    @Column({name: 'user_id'})
    userId: number

    @Column({name: 'device_id'})
    deviceId: number

    @ManyToOne(() => UserEntity, (u) => u.devices, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'user_id'})
    user: UserEntity

    @ManyToOne(() => DeviceEntity, (d) => d.attachedUsers, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'device_id'})
    device: DeviceEntity
}