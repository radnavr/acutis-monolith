export const getOneDeed = async () => {
  if (!process.env.NEXT_PUBLIC_API_DOMAIN) return { deed: "placeholder text" };
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/deed`, {
    cache: "no-store",
  });
  const responseJson = await response.json();

  const getRandom = () => Math.floor(Math.random() * responseJson.length);

  return responseJson[getRandom()];
};
