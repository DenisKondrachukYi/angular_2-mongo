import {DataBaseContainer} from "./db-container";

export class DataBaseModel<T> extends DataBaseContainer {

    public collection: string = 'default';

    constructor(params: T) {
        super();
        this.addModelToCollection(params);
    }

    addModelToCollection(params = {}) {
        // if(params)
        //     this.dataBaseRef.collection(this.collection).insertOne(params).then(res => console.log(res));
    }
}
