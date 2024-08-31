'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {useRouter, usePathname} from '@/navigation';
import {Locale} from "../types/index"

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
  bg: string;
  text: string;
};

export default function LocaleSwitcherSelect({
  children,
  bg, 
  text,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <label
      className={clsx(
        `relative ${text} `,
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      {/* <p className="sr-only">{label}</p> */}
   
      <select
        className={`cursor-pointer inline-flex   ${bg} py-3 pl-2 pr-6`}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      {/* <span><MdKeyboardArrowDown/></span> */}
      {/* <span className="pointer-events-none ">⌄</span> */}
    
    </label>
  );
}