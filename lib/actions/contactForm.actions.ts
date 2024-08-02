'use server'
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { parseStringify } from "../utils";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

export const sendMessage = async (message : ContactFormParams) => {

    const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_CLIENT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        scopes: SCOPES,
      });

    try {
    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID,
      serviceAccountAuth
    );

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    //  console.log(sheet)

    const newRowData = {
      Date: new Date().toLocaleString(),
      Name: message.name,
      Surname: message.surname,
      Phone: message.phone,
      Email: message.email,
      Message: message.message,
      PrivacyConsent: message.privacyConsent
    };

    const newRow = await sheet.addRow(newRowData);
 console.log(newRow)
    return "ok"
    return parseStringify(newRow)

    } catch (error) {
        console.log(error)
    }
}

