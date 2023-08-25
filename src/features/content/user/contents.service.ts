import contentModel from "../../../dataAccess/dataEntities/content";
import { ResponseList } from "../../../types/response";
import * as userContentRepository from "./contents.repository";

export const getContent = async (
  topicId: string
): Promise<ResponseList<contentModel>> => {
  const result: ResponseList<contentModel> = {
    count: 0,
    data: Array<contentModel>(),
  };
  result.data = await userContentRepository.getContentsByAppointmentId(topicId);
  return await result;
};

export const searchContent = async (
  searchString: string
): Promise<ResponseList<contentModel>> => {
  const result: ResponseList<contentModel> = {
    count: 0,
    data: Array<contentModel>(),
  };
  result.data = await userContentRepository.searchContent(searchString);
  return await result;
};
