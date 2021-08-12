export interface Themes {
  [key: string]: {
    headerBg: { hex: string; rgb: number[] };
    mainBg: { hex: string; rgb: number[] };
    primary: { hex: string; rgb: number[] };
    secondary: { hex: string; rgb: number[] };
    darkBlue: { hex: string; rgb: number[] };
    textDarkBlue: { hex: string; rgb: number[] };
    lightBlue: { hex: string; rgb: number[] };
    red: { hex: string; rgb: number[] };
    orange: { hex: string; rgb: number[] };
    green: { hex: string; rgb: number[] };
    white: { hex: string; rgb: number[] };
    whiteElement: { hex: string; rgb: number[] };
    whiteItem: { hex: string; rgb: number[] };
    darkOrange: { hex: string; rgb: number[] };
    gray: { hex: string; rgb: number[] };
    lightGray: { hex: string; rgb: number[] };
    disabledGray: { hex: string; rgb: number[] };
  };
}
