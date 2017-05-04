import * as mongo from 'mongodb';
import {Db} from "mongodb";

export class DataBaseConnector {

    static dataBase: Db;

    static async connectMongoDB(url: string): Promise<Db> {
        this.dataBase = await mongo.MongoClient.connect(url);
        return this.dataBase;
    }

}
