import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DateTime } from 'luxon';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertStringToDate = (
  dateStr: string,
  tz: string = 'America/Los_Angeles'
) => {
  if (!dateStr) {
    return;
  }
  if (dateStr.includes('T')) {
    dateStr += '-0800';
  } else {
    dateStr += 'T12:00:00.000-0800';
  }
  console.log(dateStr);
  const date = new Date(Date.parse(dateStr));
  console.log(date);
  return date;

  //const dateObj = new Date(date);
  // const options: Intl.DateTimeFormatOptions = {
  //   day: 'numeric',
  //   month: 'short',
  //   year: 'numeric',
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   //timeZone: 'America/Log_Angeles',
  // };
  // const formatter = new Intl.DateTimeFormat(locale, options);
  // return formatter.format(dateObj);
};

export const formatDateToLocal = (
  //dateStr: string,
  date: Date | string | undefined,
  locale: string = 'en-US'
) => {
  if (!date) {
    return;
  }
  if (date instanceof Date) {
    date = date.toString();
  }

  return DateTime.fromISO(date).toFormat('yyyy-MM-dd');

  //const dateObj = new Date(date);
  // const options: Intl.DateTimeFormatOptions = {
  //   day: 'numeric',
  //   month: 'short',
  //   year: 'numeric',
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   //timeZone: 'America/Log_Angeles',
  // };
  // const formatter = new Intl.DateTimeFormat(locale, options);
  // return formatter.format(dateObj);
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
