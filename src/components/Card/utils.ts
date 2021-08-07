import { Duration } from "../../types/card";

export const formatPrice = (price: number) => {
  const price_arr = price.toString().split("").reverse();
  let price_str = "";

  price_arr.map((item: string, index: number) => {
    if (index !== 0 && index % 3 === 0) {
      price_str += " ";
    }

    price_str += item;

    return item;
  });

  return price_str.split("").reverse().join("");
};

export const formatDate = (duration: Duration) => {
  let str = "";

  if (duration.day) {
    str += duration.day;

    if (duration.day > 9 && duration.day < 20) {
      str += " дней";
    } else {
      if (duration.day % 10 === 1) {
        str += " день ";
      }

      if (duration.day % 10 > 1 && duration.day % 10 < 5) {
        str += " дня ";
      }

      if (duration.day % 10 > 4 || duration.day % 10 === 0) {
        str += " дней ";
      }
    }
  }

  if (duration.night) {
    str += duration.night;

    if (duration.night > 9 && duration.night < 20) {
      str += " ночей";
    } else {

    if (duration.night % 10 === 1) {
      str += " ночь";
    }

    if (duration.night % 10 > 1 && duration.night % 10 < 5) {
      str += " ночи";
    }

    if (duration.night % 10 > 4 || duration.night % 10 === 0) {
      str += " ночей";
    }
    }
  }

  if (duration.hour) {
    str += duration.hour;

    if (duration.hour === 1) {
      str += " час";
    }

    if (duration.hour > 1 && duration.hour < 5) {
      str += " часа";
    }

    if (duration.hour > 4) {
      str += " часов";
    }
  }

  if (str[str.length - 1] === " ") {
    str = str.slice(0, -1);
  }

  return "(" + str + ")";
};
