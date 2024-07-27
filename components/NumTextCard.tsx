


export default function NumTextCard({num, text}: { num : string, text:string}) {
  return (
    <li  className="flex ">
             
    <div className="h1  w-[60px] ">{`${num}.`}</div>
    <div className="ml-5">{text}</div>
   
  </li>
  )
}
