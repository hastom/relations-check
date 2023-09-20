import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DeviceEntity} from "./device.entity";
import {DeviceLocationCommentEntity} from "./device-location-comment.entity";

@Entity('devices_locations')
export class DeviceLocationEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    coords: string

    @Column({name: 'device_id'})
    deviceId: number

    @ManyToOne(() => DeviceEntity, (d) => d.locations, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'device_id'})
    device: DeviceEntity

    @OneToMany(() => DeviceLocationCommentEntity, (c) => c.location)
    comments: DeviceLocationCommentEntity[]
}