import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function SvgComponent(props: any) {
  return (
    <Svg
      width={134.573}
      height={134.573}
      viewBox="0 0 134.573 134.573"
      {...props}
    >
      <G data-name="Grupo 9" fill="#fff">
        <Path
          data-name="Caminho 16"
          d="M114.866 19.708a67.287 67.287 0 00-95.158 95.158 67.287 67.287 0 0095.158-95.158zm-47.579 106.98a59.4 59.4 0 1159.4-59.4 59.469 59.469 0 01-59.4 59.4z"
        />
        <Path
          data-name="Caminho 17"
          d="M98.507 64.091L51.196 29.922a3.943 3.943 0 00-6.251 3.2v68.338a3.942 3.942 0 006.251 3.2l47.311-34.169a3.942 3.942 0 000-6.392zM52.83 93.745V40.829l36.635 26.458z"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
