export const getOneDeed = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/deed`);
  const responseJson = await response.json();

  const getRandom = () => Math.floor(Math.random() * responseJson.length);

  return responseJson[getRandom()];
};
