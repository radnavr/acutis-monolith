export const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/tags/acutis`;

export const headers = new Headers();
headers.set(
  "Authorization",
  "Basic " +
    btoa(
      `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
    )
);
