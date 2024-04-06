
//Function to convert #hex to rgb color:
export function hexToRgb(hex: string): number  | null {
  // Remove # if it's present
  hex = hex.replace('#', '');
  
  // Parse the hexadecimal string to integer values for RGB
  const bigint = parseInt(hex, 16);
  
  // Extract individual RGB components
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  const red = 0.2126;
  const green = 0.7152;
  const blue = 0.0722;

  //We return a unique value, to determinate if the color is closer to black or white:
  const c = red * r + green * g + blue * b;

  return c;
}