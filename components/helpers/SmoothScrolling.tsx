"use client";
import { ReactLenis} from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{  duration: 1.0, smoothTouch: true, smooth:true  }}>
    {children}
  </ReactLenis>
  );
}

export default SmoothScrolling;
