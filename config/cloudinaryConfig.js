export const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/image/tags/acutis`;

export const headers = new Headers();
headers.set(
  "Authorization",
  "Basic " + btoa(`${process.env.API_KEY}:${process.env.API_SECRET}`)
);
