import { faker } from "@faker-js/faker";

export function getRandomMinMax(min: number, max: number) {
  const middle = (min + max) / 2;
  const randMin = faker.number.int({ min: min, max: middle });
  const randMax = faker.number.int({ min: middle, max: max });
  return { min: randMin, max: randMax };
}
