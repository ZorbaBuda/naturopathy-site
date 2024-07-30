import { aboutCurriculum } from "@/lib/data"

export default function AboutCurriculumSection() {
  return (
    <section className="section">
        <div className="subcontainer flex flex-col lg:flex-row gap-x-20 items-center">
            <div className="h2">{aboutCurriculum.title}</div>
            <div className="prose-custom">
                {aboutCurriculum.pItems.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    </section>
  )
}
