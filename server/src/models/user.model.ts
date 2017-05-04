import {DataBaseModel} from "../mongo-client-wrapper/db-model";

interface User {
    name: string,
    phone: string
}

export class UserModel extends DataBaseModel<User> {

    public collection: string = 'user'

}
