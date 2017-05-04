import {DataBaseModel} from "../mongo-client-wrapper/db-model";

interface User {
    name: string,
    phone: string
}

const USER_COLLECTION = 'user';

export class UserModel extends DataBaseModel<User> {

    protected collection: string = USER_COLLECTION;

}
