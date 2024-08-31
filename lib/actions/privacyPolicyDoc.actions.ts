"use server";

import { ContactFormParams } from "@/types";
import { parseStringify } from "../utils";

export const getPrivacyPolicyDocument = async (locale: string) => {
  try {
    const request = new Request(
      `${process.env.SERVER_API!}/api/privacy-policy-doc?locale=${locale}`
    );

    //TODO revalidate
    //TODO server  paths depending of dev or prod
    const response = await fetch(request);

    const doc = await response.json();
    // console.log(doc);
    return doc;
  } catch (error) {
    console.log(error);
  }
};
