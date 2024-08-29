type Props = {
    title: string;
    href: string;
  };
  
  export default function ExternalLink({href, title}: Props) {
    return (
      <a
        className=""
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        <p className="">
          {title}
        </p>
       
      </a>
    );
  }