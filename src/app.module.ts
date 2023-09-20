import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./user.entity";
import {UserDeviceEntity} from "./user-device.entity";
import {DeviceEntity} from "./device.entity";
import {DeviceLocationEntity} from "./device-location.entity";
import {DeviceLocationCommentEntity} from "./device-location-comment.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
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
            migrationsRun: true,
            migrations: [__dirname + '/migrations/*.js'],
            logging: ['query']
        }),
        TypeOrmModule.forFeature([
            UserEntity,
            UserDeviceEntity,
            DeviceEntity,
            DeviceLocationEntity,
            DeviceLocationCommentEntity,
        ])
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
