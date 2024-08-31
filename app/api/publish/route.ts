import { NextResponse } from "next/server";
import { writeFileSync } from "fs";
import ca from "@/messages/ca.json";
import es from "@/messages/es.json";

// https://stackoverflow.com/questions/77076151/loading-translation-files-from-a-server-or-cms-in-next-intl-seeking-guidance

enum PublishTypes {
  HOME_PAGE = "homePage",
  ABOUT_PAGE = "aboutPage",
}

export async function POST(request: Request) {
  console.log("hi")
  const res = await request.json();

  const fileCa = "./messages/ca.json";
  const fileEs = "./messages/es.json";

  try {
    switch (res.type) {
      case PublishTypes.HOME_PAGE:
        ca.home = res.ca;
        es.home = res.es;
        break;
      case PublishTypes.ABOUT_PAGE:
        ca.about = res.ca;
        es.about = res.es;
        break;
      default:
        console.log("Publish type not found");
    }

    writeFileSync(fileCa, JSON.stringify(ca));
    writeFileSync(fileEs, JSON.stringify(es));

    return NextResponse.json(
      { success: true, message: "Published" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Something went wrong", data: error },
      { status: 500 }
    );
  }
}
