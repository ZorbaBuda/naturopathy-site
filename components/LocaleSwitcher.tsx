import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import {locales} from '@/config';

export default function LocaleSwitcher({bg, text} : {bg: string, text:string}) {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')} bg={bg} text={text}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', {locale: cur})}
        </option>
        
      ))}
    </LocaleSwitcherSelect>
  );
}