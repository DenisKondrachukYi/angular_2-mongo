import {Db} from "mongodb";
import {DataBaseConnector} from "./db-connector";

export class DataBaseContainer {

    public dataBaseRef:Db = DataBaseConnector.dataBase;

}
