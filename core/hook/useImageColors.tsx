// import React, { useEffect, useMemo, useState } from 'react';
// import { getColors, ImageColorsResult } from 'react-native-image-colors';
// import { PRIMARY_COLOR } from '../theme/colors';

// const useImageColors = (imageUrl: string) => {
//   const [colors, setColors] = useState<ImageColorsResult>();

//   useEffect(() => {
//     const fetchColors = async () => {
//       if (imageUrl) {
//         try {
//           const response = await getColors(imageUrl);
//           setColors(response);
//         } catch (err) {
//           console.log(err);
//         }
//       }
//     };

//     fetchColors();
//   }, [imageUrl]);

//   const colorPalette = useMemo(() => {
//     if (!colors) {
//       return {
//         primary: PRIMARY_COLOR,
//         secondary: PRIMARY_COLOR,
//         background: PRIMARY_COLOR,
//       };
//     }
//     if ('platform' in colors) {
//       if (colors.platform === 'ios') {
//         return {
//           primary: colors.primary,
//           secondary: colors.secondary,
//           background: colors.background,
//         };
//       }
//       if (colors.platform === 'android') {
//         return {
//           primary: colors.dominant,
//           secondary: colors.dominant,
//           background: colors.dominant,
//         };
//       }
//     }
//   }, [colors]);

//   return {
//     colors: colorPalette,
//   };
// };

// export default useImageColors;
