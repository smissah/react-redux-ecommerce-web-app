import Commerce from "@chec/commerce.js";
//handles all the backend
export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
