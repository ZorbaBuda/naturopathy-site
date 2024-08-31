import * as React from "react";

// import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      // <input
      //   type={type}
      //   className=
      //     {`mt-5 flex h-[50px] w-full  border-b border-black bg-background 
      //     px-2 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium 
      //     placeholder:text-muted-foreground focus-visible:outline-none 
      //     focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50`}
      //   ref={ref}
      //   {...props}
      // />
      <input
      type={type}
      className=
        {` flex h-[70px] w-full    bg-background -mt-[1px] border  border-x border-gray-400
        px-3 py-3 file:border-0 file:bg-transparent file:text-sm file:font-medium 
        placeholder:text-muted-foreground focus-visible:outline-none 
         disabled:cursor-not-allowed disabled:opacity-50 `}
      ref={ref}
      {...props}
    />
    );
  }
);
Input.displayName = "Input";

export { Input };

// className=
// {`flex h-[50px] w-full rounded-md border border-input bg-background 
// px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium 
// placeholder:text-muted-foreground focus-visible:outline-none 
// focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50`}