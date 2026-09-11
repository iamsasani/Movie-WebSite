import { BaseUrlImage } from "../data/data";

export function imgUrl(path, size) {
  return `${BaseUrlImage}/${size}${path}`;
}