

// https://support.google.com/calendar/answer/41207?hl=en
import picture from "@/public/assets/calendar-appointment.jpg"
import HeroBanner from "@/components/HeroBanner";
import { schedule } from "@/lib/data";

export default function page() {
  return (
    <div className="h-full min-h-screen">
      
    <HeroBanner title="Reserva" image={picture} />
    <div className="subcontainerXl flex flex-col gap-10">
        <p className="text-xl mt-10">{schedule.message}</p> 
       {/* Google Calendar Appointment Scheduling begin  */}
            <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Km2BJa2m2E3ew41r8PGNubTzMFwfgHPY5e90T427fbEmRcc0TaUK3uvtmqHKBVINEH62WEw0d?gv=true" 
            // style="border: 0" 
            width="100%" 
            height="800" 
            frameBorder="0">
                
            </iframe>
        {/* end Google Calendar Appointment Scheduling */}
        </div>
        </div>
      
  )
}
