"use server";

import { parseStringify } from "../utils";

export const sendMessage = async (message: ContactFormParams) => {
  try {
    const request = new Request(`${process.env.SERVER_API!}/api/contact-form`, {
      method: "POST",
      body: JSON.stringify(message),
    });

    const response = await fetch(request);

    console.log(response.status);

    return "ok";
  } catch (error) {
    console.log(error);
  }
};
