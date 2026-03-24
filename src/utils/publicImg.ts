export function publicImg(fileName: string): string {
  return `${import.meta.env.BASE_URL}img/${fileName}`;
}
