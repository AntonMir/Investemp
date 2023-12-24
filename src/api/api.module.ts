import {Module} from '@nestjs/common';
import {UserModule} from "./user/user.module";
import {RouterModule, RouteTree} from "@nestjs/core";

@Module({
    imports: [
        UserModule,
        ApiModule,
        RouterModule.register([
            {
                path: 'api',
                module: ApiModule,
                children: [
                    {
                        path: 'user',
                        module: UserModule
                    },
                ]
            }
        ]),
    ],

})
export class ApiModule {}
