import { PRIMARY_COLOR } from './colors';

export const calendarTheme = {
  itemDayContainer: {
    activeDayFiller: {
      backgroundColor: PRIMARY_COLOR,
    },
  },
  itemDay: {
    active: () => ({
      container: {
        backgroundColor: PRIMARY_COLOR,
      },
      content: {
        color: 'white',
      },
    }),
  },
};
