import { contactInfo } from "@/lib/data";

const DirectionSection = () => {
  return (
    <section className="section-xs">
      <div className="subcontainerXl flex flex-col gap-10 lg:flex-row">
        <div className="text-xl flex flex-col gap-5  basis-1/2">
        
          <div className="text-3xl underline uppercase">Ens trobaras a:</div>
          <div className="">
            <div>{contactInfo.address}</div>
            <div>{contactInfo.addressProvince}</div>
          </div>
          <div>
            <div>{contactInfo.phone}</div>
            <div>{contactInfo.email}</div>
          </div>
        </div>
       
        <div className="basis-1/2 border-2 border-black">
          <iframe
            src={contactInfo.addressGoogleMaps}
            width="100%"
            height="250"
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
