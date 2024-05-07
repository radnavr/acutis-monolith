import { handleMongoConnection } from "@/config/handleMongoConnection";
import Deed from "@/models/Deed";

export const GET = async () => {
  try {
    handleMongoConnection();
    const allDeedsArr = await Deed.find({});

    return new Response(JSON.stringify(allDeedsArr), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "something went wrong" }), {
      status: 500,
    });
  }
};
