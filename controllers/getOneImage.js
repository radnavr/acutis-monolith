import { url, headers } from "@/config/cloudinaryConfig";

export const getOneImage = async () => {
  try {
    const response = await fetch(url, {
      headers,
    });
    if (!response.ok) throw new Error("client request error");
    const responseJson = await response.json();
    const data = responseJson.resources.map((imgObj) => ({
      imgUrl: imgObj.secure_url,
    }));
    const getRandom = () => Math.floor(Math.random() * data.length);

    return data[getRandom()];
  } catch (error) {
    console.error(error);
  }
};
