import contentModel from "../../../dataAccess/dataEntities/content";

export const getContentsByAppointmentId = async (appoinmentId: string) => {
  return await contentModel.find({ appointment: appoinmentId });
};

export const searchContent = async (searchString: string) => {
  return await contentModel.find({
    $or: [
      { title: {  $regex: searchString, $options: 'i'  } },
      { description: {  $regex: searchString, $options: 'i'  } },
    ],
  });
};
