enum FontWeight {
  Regular = 400,
  Medium = 500,
  Semibold = 600,
  Bold = 700,
}

type TypographyType = [
  fontSize: string,
  { lineHeight: string; letterSpacing: string; fontWeight: FontWeight }
];

const typography: Record<
  `${"ds"}-${"Display"}-${`2xl`}-${keyof typeof FontWeight}`,
  TypographyType
> = {
  "ds-Display-2xl-Regular": [
    "72px",
    { lineHeight: "10px", letterSpacing: "10px", fontWeight: 400 },
  ],
};
