import BaseService from "./base.service";

class HomeService extends BaseService {
    async searchModel(modelName: string) {
        return this.get("/players/" + modelName);
    }

    async searchUserById(modelName: string) {
        return this.get("/players/" + modelName);
    }


    verifyCookie(): any {
        return this.get("/auth");
    }

}

export default new HomeService();
