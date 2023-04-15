import axios, {AxiosResponse} from "axios"
import {Drink} from "../types/drink";

export default class DrinkService {

    static async getByName(name: string): Promise<Drink[]> {
        const response: AxiosResponse<DrinksResponse> = await axios.get(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php", {
                params: {s: name}
            })
        return response.data.drinks
    }
}

interface DrinksResponse {
    drinks: Drink[]
}