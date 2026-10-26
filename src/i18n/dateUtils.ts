import { Language } from './translations';

export interface DayInfo {
  id: string; // 'Monday', 'Tuesday', etc.
  name: string;
  short: string;
  note: string;
}

export const DAYS_BY_LANG: Record<Language, DayInfo[]> = {
  en: [
    { id: 'Monday', name: 'Monday', short: 'Mon', note: 'North Lehigh / Lee Blvd North' },
    { id: 'Tuesday', name: 'Tuesday', short: 'Tue', note: 'Central Lehigh / Homestead' },
    { id: 'Wednesday', name: 'Wednesday', short: 'Wed', note: 'Sunshine Blvd Corridor' },
    { id: 'Thursday', name: 'Thursday', short: 'Thu', note: 'South Lehigh / Gunnery' },
    { id: 'Friday', name: 'Friday', short: 'Fri', note: 'East Lehigh / Joel Blvd' },
  ],
  es: [
    { id: 'Monday', name: 'Lunes', short: 'Lun', note: 'Norte de Lehigh / Lee Blvd Norte' },
    { id: 'Tuesday', name: 'Martes', short: 'Mar', note: 'Centro de Lehigh / Homestead' },
    { id: 'Wednesday', name: 'Miércoles', short: 'Mié', note: 'Corredor Sunshine Blvd' },
    { id: 'Thursday', name: 'Jueves', short: 'Jue', note: 'Sur de Lehigh / Gunnery' },
    { id: 'Friday', name: 'Viernes', short: 'Vie', note: 'Este de Lehigh / Joel Blvd' },
  ],
  ht: [
    { id: 'Monday', name: 'Lendi', short: 'Len', note: 'Nò Lehigh / Lee Blvd Nò' },
    { id: 'Tuesday', name: 'Madi', short: 'Mad', note: 'Sant Lehigh / Homestead' },
    { id: 'Wednesday', name: 'Mèkredi', short: 'Mèk', note: 'Zòn Sunshine Blvd' },
    { id: 'Thursday', name: 'Jedi', short: 'Jed', note: 'Sid Lehigh / Gunnery' },
    { id: 'Friday', name: 'Vandredi', short: 'Van', note: 'Lès Lehigh / Joel Blvd' },
  ],
};

const DAY_NAMES: Record<string, Record<Language, { name: string; short: string }>> = {
  monday: {
    en: { name: 'Monday', short: 'Mon' },
    es: { name: 'Lunes', short: 'Lun' },
    ht: { name: 'Lendi', short: 'Len' },
  },
  tuesday: {
    en: { name: 'Tuesday', short: 'Tue' },
    es: { name: 'Martes', short: 'Mar' },
    ht: { name: 'Madi', short: 'Mad' },
  },
  wednesday: {
    en: { name: 'Wednesday', short: 'Wed' },
    es: { name: 'Miércoles', short: 'Mié' },
    ht: { name: 'Mèkredi', short: 'Mèk' },
  },
  thursday: {
    en: { name: 'Thursday', short: 'Thu' },
    es: { name: 'Jueves', short: 'Jue' },
    ht: { name: 'Jedi', short: 'Jed' },
  },
  friday: {
    en: { name: 'Friday', short: 'Fri' },
    es: { name: 'Viernes', short: 'Vie' },
    ht: { name: 'Vandredi', short: 'Van' },
  },
  saturday: {
    en: { name: 'Saturday', short: 'Sat' },
    es: { name: 'Sábado', short: 'Sáb' },
    ht: { name: 'Samdi', short: 'Sam' },
  },
  sunday: {
    en: { name: 'Sunday', short: 'Sun' },
    es: { name: 'Domingo', short: 'Dom' },
    ht: { name: 'Dimanch', short: 'Dim' },
  },
};

const MONTH_NAMES: Record<string, Record<Language, { full: string; short: string }>> = {
  jan: {
    en: { full: 'January', short: 'Jan' },
    es: { full: 'Enero', short: 'Ene' },
    ht: { full: 'Janvye', short: 'Jan' },
  },
  feb: {
    en: { full: 'February', short: 'Feb' },
    es: { full: 'Febrero', short: 'Feb' },
    ht: { full: 'Fevriye', short: 'Feb' },
  },
  mar: {
    en: { full: 'March', short: 'Mar' },
    es: { full: 'Marzo', short: 'Mar' },
    ht: { full: 'Mas', short: 'Mas' },
  },
  apr: {
    en: { full: 'April', short: 'Apr' },
    es: { full: 'Abril', short: 'Abr' },
    ht: { full: 'Avril', short: 'Avr' },
  },
  may: {
    en: { full: 'May', short: 'May' },
    es: { full: 'Mayo', short: 'May' },
    ht: { full: 'Me', short: 'Me' },
  },
  jun: {
    en: { full: 'June', short: 'Jun' },
    es: { full: 'Junio', short: 'Jun' },
    ht: { full: 'Jen', short: 'Jen' },
  },
  jul: {
    en: { full: 'July', short: 'Jul' },
    es: { full: 'Julio', short: 'Jul' },
    ht: { full: 'Jiyè', short: 'Jiy' },
  },
  aug: {
    en: { full: 'August', short: 'Aug' },
    es: { full: 'Agosto', short: 'Ago' },
    ht: { full: 'Out', short: 'Out' },
  },
  sep: {
    en: { full: 'September', short: 'Sep' },
    es: { full: 'Septiembre', short: 'Sep' },
    ht: { full: 'Septanm', short: 'Sep' },
  },
  sept: {
    en: { full: 'September', short: 'Sept' },
    es: { full: 'Septiembre', short: 'Sept' },
    ht: { full: 'Septanm', short: 'Sept' },
  },
  oct: {
    en: { full: 'October', short: 'Oct' },
    es: { full: 'Octubre', short: 'Oct' },
    ht: { full: 'Oktòb', short: 'Okt' },
  },
  nov: {
    en: { full: 'November', short: 'Nov' },
    es: { full: 'Noviembre', short: 'Nov' },
    ht: { full: 'Novanm', short: 'Nov' },
  },
  dec: {
    en: { full: 'December', short: 'Dec' },
    es: { full: 'Diciembre', short: 'Dic' },
    ht: { full: 'Desanm', short: 'Des' },
  },
};

/**
 * Translates a single day of the week ID or name
 */
export function translateDay(dayIdOrName: string, lang: Language): string {
  const key = dayIdOrName.trim().toLowerCase();
  const found = DAY_NAMES[key];
  if (found) {
    return found[lang]?.name || found.en.name;
  }
  return dayIdOrName;
}

/**
 * Translates a day abbreviation
 */
export function translateDayShort(dayIdOrName: string, lang: Language): string {
  const key = dayIdOrName.trim().toLowerCase();
  const found = DAY_NAMES[key];
  if (found) {
    return found[lang]?.short || found.en.short;
  }
  return dayIdOrName.slice(0, 3);
}

/**
 * Translates a month name or abbreviation
 */
export function translateMonth(monthStr: string, lang: Language, preferShort = true): string {
  const key = monthStr.trim().toLowerCase().slice(0, 4);
  const matchedKey = Object.keys(MONTH_NAMES).find((k) => key.startsWith(k));
  if (matchedKey && MONTH_NAMES[matchedKey]) {
    const entry = MONTH_NAMES[matchedKey][lang] || MONTH_NAMES[matchedKey].en;
    return preferShort ? entry.short : entry.full;
  }
  return monthStr;
}

/**
 * Translates standard date strings like:
 * "Tuesday, Oct 24" -> "Martes, 24 de oct." (es) | "Madi 24 Oktòb" (ht)
 * "Tuesday" -> "Martes" (es) | "Madi" (ht)
 * "Jan 24, 2024" -> "24 de enero de 2024" (es) | "24 Janvye 2024" (ht)
 */
export function formatLocalizedDate(
  dayKey: string,
  monthKey: string,
  dayNum: string | number,
  lang: Language
): string {
  const dName = translateDay(dayKey, lang);
  const mShort = translateMonth(monthKey, lang, true);
  const mFull = translateMonth(monthKey, lang, false);

  if (lang === 'es') {
    return `${dName}, ${dayNum} de ${mShort.toLowerCase()}.`;
  } else if (lang === 'ht') {
    return `${dName} ${dayNum} ${mFull}`;
  }
  return `${dName}, ${mShort} ${dayNum}`;
}

/**
 * Translates any composite date string used in Limpi
 */
export function translateDateString(str: string | undefined, lang: Language): string {
  if (!str) return '';
  const trimmed = str.trim();

  // Pattern 1: "Tuesday, Oct 24" or "Tuesday, Nov 7" or "Tuesday, Sep 26"
  const dayMonthDayRegex = /^([A-Za-z]+),\s*([A-Za-z]+)\s*(\d{1,2})$/;
  const match1 = trimmed.match(dayMonthDayRegex);
  if (match1) {
    const [, d, m, dayNum] = match1;
    return formatLocalizedDate(d, m, dayNum, lang);
  }

  // Pattern 2: "Tue, Oct 24"
  const shortDayMonthRegex = /^([A-Za-z]{3}),\s*([A-Za-z]+)\s*(\d{1,2})$/;
  const match2 = trimmed.match(shortDayMonthRegex);
  if (match2) {
    const [, d, m, dayNum] = match2;
    const dShort = translateDayShort(d, lang);
    const mShort = translateMonth(m, lang, true);
    if (lang === 'es') {
      return `${dShort}, ${dayNum} ${mShort.toLowerCase()}`;
    } else if (lang === 'ht') {
      return `${dShort}, ${dayNum} ${mShort}`;
    }
    return `${dShort}, ${mShort} ${dayNum}`;
  }

  // Pattern 3: "Jan 24, 2024" or "Nov 30, 2024"
  const monthDayYearRegex = /^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/;
  const match3 = trimmed.match(monthDayYearRegex);
  if (match3) {
    const [, m, dayNum, year] = match3;
    const mFull = translateMonth(m, lang, false);
    if (lang === 'es') {
      return `${dayNum} de ${mFull.toLowerCase()} de ${year}`;
    } else if (lang === 'ht') {
      return `${dayNum} ${mFull} ${year}`;
    }
    return `${mFull} ${dayNum}, ${year}`;
  }

  // Pattern 4: "Sept 2023" or "Sep 2023"
  const monthYearRegex = /^([A-Za-z]+)\s+(\d{4})$/;
  const match4 = trimmed.match(monthYearRegex);
  if (match4) {
    const [, m, year] = match4;
    const mFull = translateMonth(m, lang, false);
    return `${mFull} ${year}`;
  }

  // Pattern 5: Just a weekday, e.g. "Tuesday"
  const singleDay = translateDay(trimmed, lang);
  if (singleDay !== trimmed) {
    return singleDay;
  }

  return trimmed;
}

/**
 * Translates completed past visit timestamp
 * "Completed at 8:42 AM" / "Completed 8:42 AM"
 */
export function translateCompletedTime(str: string, lang: Language): string {
  const timeMatch = str.match(/(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm)?)/i);
  const time = timeMatch ? timeMatch[1] : str;
  if (lang === 'es') {
    return `Completado a las ${time}`;
  } else if (lang === 'ht') {
    return `Fini a ${time}`;
  }
  return `Completed at ${time}`;
}
