import { ProducesSchema } from "../../schemas/produce";
import { axiosInstance } from "../instance";

export const getProduces = async () => {
  try {
    const { data } = await axiosInstance.get("/produces");
    // console.log("response: ", response);
    //  .then((data) => ArticlesSchema.parse(data));
    return ProducesSchema.parse(data);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des fruits et légumes",
      error
    );
    throw error;
  }
};
