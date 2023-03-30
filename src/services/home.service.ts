import BaseService from "./base.service";

class HomeService extends BaseService {
    async searchModel(modelName: string) {
        return this.get("/auth/login?model=" + modelName);
    }


    verifyCookie(): any {
        return this.get("/auth");
    }

}

export default new HomeService();
