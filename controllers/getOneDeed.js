export const getOneDeed = async () => {
  const response = await fetch(`${process.env.APP_URL}/api/deed`);
  const responseJson = await response.json();

  const getRandom = () => Math.floor(Math.random() * responseJson.length);

  return responseJson[getRandom()];
};
