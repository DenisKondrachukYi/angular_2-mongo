import {DataBaseContainer} from "./db-container";

export class DataBaseModel<T> extends DataBaseContainer {

    collection: string = 'default';

    modelData: any = {};

    constructor(params: T) {
        super();
        this.setModelData(params);
    }

    setModelData(params = {}): void {
        Object.assign(this.modelData, params)
    }

    async addToCollection(): Promise<any> {
       return await this.dataBaseRef.collection(this.collection).insertOne(this.modelData)
    }
}
