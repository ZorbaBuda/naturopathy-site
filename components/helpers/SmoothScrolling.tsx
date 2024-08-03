"use client";
import { ReactLenis} from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{  duration: 1.5, smoothTouch: true, smooth:true  }}>
    {children}
  </ReactLenis>
  );
}

export default SmoothScrolling;
