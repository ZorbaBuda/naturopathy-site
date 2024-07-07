import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

export async function POST(request: Request) {
  const data: ContactFormProps = await request.json();

  //  console.log(data)

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
      Name: data.name,
      Surname: data.surname,
      Phone: data.phone,
      Email: data.email,
      Message: data.message,
    };

    const newRow = await sheet.addRow(newRowData);

    return new NextResponse(
      JSON.stringify({
        success: "message was submitted",
        // response: response,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({
        message: "Error submitting form",
        error,
      }),
      { status: 500 }
    );
  }
}

// import { Client } from "@notionhq/client";
// https://dev.to/martinp/use-notion-as-a-database-for-your-nextjs-blog-195p
// export async function POST(request: Request) {
//   try {
//     const data = await request.json();

//     const entry: any = {
//       parent: {
//         // database_id: `${process.env.NOTION_CONTACT_DATABASE_ID}`,
//         database_id: `${process.env.NOTION_CONTACT_DB}`,
//       },
//       properties: {
//         Date: {
//           date: {
//             start: `${data.date}`,
//           },
//         },

//         Name: {
//           title: [
//             {
//               text: {
//                 content: `${data.name}`,
//               },
//             },
//           ],
//         },

//         Surname: {
//           rich_text: [
//             {
//               text: {
//                 content: `${data.surname}`,
//               },
//             },
//           ],
//         },

//         Phone: {
//           rich_text: [
//             {
//               text: {
//                 content: `${data.phone}`,
//               },
//             },
//           ],
//         },

//         Email: {
//           email: `${data.email}`,
//         },

//         Message: {
//           rich_text: [
//             {
//               text: {
//                 content: `${data.message}`,
//               },
//             },
//           ],
//         },
//       },
//     };
//     const notion = new Client({ auth: `${process.env.NOTION_SECRET}` });
//     const response = await notion.pages.create(entry);

//     return new NextResponse(
//       JSON.stringify({
//         success: "message was submitted",
//         response: response,
//       }),
//       { status: 201 }
//     );
//   } catch (error) {
//     return new NextResponse(
//       JSON.stringify({
//         message: "Error submitting form",
//         error,
//       }),
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request: Request) {
//   const data = await request.json();
//   console.log("herreeee", data);
//   const entry: any = {
//     parent: {
//       // database_id: `${process.env.NOTION_CONTACT_DATABASE_ID}`,
//       database_id: `${process.env.NOTION_DATA_ID}`,
//     },
//     properties: {
//       Name: {
//         title: [
//           {
//             text: {
//               content: `${data.name}`,
//             },
//           },
//         ],
//       },

//       Surname: {
//         rich_text: [
//                         {
//                             text: {
//                                 content: `${data.surname}`,
//                             },
//                         },
//                     ],
//       },

//       Email: {
//         rich_text: [
//             {
//                 text: {
//                     content: `${data.email}`,
//                 },
//             },
//         ],
//       },
//       Message: {
//         rich_text: [
//             {
//                 text: {
//                     content: `${data.message}`,
//                 },
//             },
//         ],
//       },
//     },

//   };
//   const notion = new Client({ auth: `${process.env.NOTION_SECRET}` });
//   const response = await notion.pages.create(entry);
//   return new NextResponse(JSON.stringify({
//     message: "message was submitted, will respond ASAP"
//   }))
// }
