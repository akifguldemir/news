const GENERAL_NEWS_ENDPOINT = "getNews?country=tr&tag=general"
import { BaseService } from "./BaseServices"

class NewsService extends BaseService {

    getAllNews(){
        return this.get(GENERAL_NEWS_ENDPOINT)
    }
}

export default new NewsService()
