// @ts-nocheck
// Class responsable for aws connection  
export default class AWSDatabase {
    static instance // Store the reference of the instance
    private id

    static getInstance(){
        if (AWSDatabase.instance == null) {
            // It will hapens only one time
            AWSDatabase.instance = new AWSDatabase()
        }
        // The subsequence calls will return the original instance
        return AWSDatabase.instance;
    }
    setId(id) {
        this.id = id
    }
    getId() {
        return this.id
    }
}
