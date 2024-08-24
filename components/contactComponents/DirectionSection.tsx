import { contactInfo } from "@/lib/data";
import { EmailLink, PhoneLink, TelegramLink, WhatsappLink } from "../parts/ContactLinks";

const DirectionSection = () => {
  return (
    <section className="section bg-[#E7F0DC]">
      <div className="subcontainerXl flex flex-col gap-10 lg:flex-row">
        <div className="text-xl flex flex-col gap-5  basis-1/2 text-center">
        
          <div className="h4 text-orange2">Contacte</div>
          <div className="font-semibold">
            <div>{contactInfo.address}</div>
            <div>{contactInfo.addressProvince}</div>
          </div>
          <div className="font-semibold">
            <div>{contactInfo.phone}</div>
            <div>{contactInfo.email}</div>
          </div>
          <div className="flex justify-center gap-5 text-white">
            <EmailLink />
           <TelegramLink />
            <WhatsappLink />
          </div>
        </div>
       
        <div className="basis-1/2 border-2 lg:border-orange1">
          <iframe
            src={contactInfo.addressGoogleMaps}
            width="100%"
            height="270"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default DirectionSection;
