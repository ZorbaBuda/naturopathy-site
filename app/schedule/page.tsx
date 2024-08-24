

// https://support.google.com/calendar/answer/41207?hl=en
import picture from "@/public/assets/calendar-appointment.jpg"
import HeroBanner from "@/components/HeroBanner";
import { schedule } from "@/lib/data";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Reserva",
  description: "Reserva, agenda la teva cita: teràpia naturopatia, nutrició i dietètica, ortomolecular, PNIE, antiaging, microimmunoteràpia a Mataro (Barcelona)",
};

export default function page() {
  return (
    <div className="h-full min-h-screen">
      
    <HeroBanner title="Reserva" image={picture} />
    <div className="subcontainerXl flex flex-col gap-10">
        <p className="text-xl mt-10">{schedule.message}</p> 
       {/* Google Calendar Appointment Scheduling begin  */}
            {/* <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/?gv=true" 
            // style="border: 0" 
            width="100%" 
            height="800" 
            frameBorder="0">
                
            </iframe> */}
        {/* end Google Calendar Appointment Scheduling */}
        </div>
        </div>
      
  )
}
