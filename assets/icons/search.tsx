import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function SvgComponent(props: {}) {
  return (
    <Svg width={28.113} height={29.107} viewBox="0 0 28.113 29.107" {...props}>
      <G data-name="Grupo 1">
        <Path
          data-name="Caminho 1"
          d="M26.677 26.179l-7.392-7.709a10.963 10.963 0 002.294-6.741A10.529 10.529 0 0011.289.997 10.529 10.529 0 001 11.73a10.529 10.529 0 0010.289 10.73 9.984 9.984 0 006.464-2.392l7.392 7.709a1.051 1.051 0 001.532 0 1.163 1.163 0 000-1.598zm-15.388-5.982a8.311 8.311 0 01-8.123-8.471 8.311 8.311 0 018.123-8.471 8.311 8.311 0 018.123 8.471 8.311 8.311 0 01-8.123 8.471z"
          fill="#4558a8"
          stroke="#4558a8"
          strokeWidth={2}
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
