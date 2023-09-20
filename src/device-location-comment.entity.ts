import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {DeviceLocationEntity} from "./device-location.entity";

@Entity('devices_locations_comments')
export class DeviceLocationCommentEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    comment: string

    @Column({name: 'location_id'})
    locationId: number

    @ManyToOne(() => DeviceLocationEntity, (dl) => dl.comments, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'location_id'})
    location: DeviceLocationEntity
}