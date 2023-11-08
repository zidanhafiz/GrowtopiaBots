export const toStars = (length?: number) => {
  if (length) {
    let stars: string = '';
    for (let i = 0; i < length; i++) {
      stars += '*';
    }
    return stars;
  }
  return;
};
