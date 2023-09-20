import {DataSource} from "typeorm";
import {UserEntity} from "./user.entity";
import {UserDeviceEntity} from "./user-device.entity";
import {DeviceEntity} from "./device.entity";
import {DeviceLocationEntity} from "./device-location.entity";
import {DeviceLocationCommentEntity} from "./device-location-comment.entity";

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'test2',
    entities: [
        UserEntity,
        UserDeviceEntity,
        DeviceEntity,
        DeviceLocationEntity,
        DeviceLocationCommentEntity,
    ],
    synchronize: false,
    migrationsRun: false,
})
export default AppDataSource