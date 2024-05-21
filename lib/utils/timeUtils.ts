/* eslint-disable import/prefer-default-export */
import dayjs from 'dayjs';

export function formatTime(time: number, format: string = 'HH:mm') {
  return dayjs(time).format(format);
}
