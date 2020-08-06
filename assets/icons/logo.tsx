import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function SvgComponent(props: {}) {
  return (
    <Svg width={110} height={28} viewBox="0 0 224.662 49.936" {...props}>
      <G fill="#4558a8">
        <Path d="M58.619 49.934V16.696H46.651v-5.939c7.09-.153 11.968-4.427 13.034-9.612h7.928v48.789zM109.299 41.857v8.076H73.554c.147-8.46 3.119-14.483 11.734-19.824l8.159-5.106c4.42-2.741 6.329-5.719 6.329-9.3 0-4.041-2.748-7.7-8.315-7.7-5.614 0-8.44 3.8-8.6 8.691h-8.838c-.007-.154-.014-.308-.014-.461 0-8.537 6.4-16.236 17.608-16.236 10.9 0 17.382 7.09 17.382 15.55 0 6.4-3.587 11.663-9.53 15.32l-9.608 5.951c-2.356 1.447-4.342 2.6-5.027 5.035zM115.262 49.936V16.751h8.462v4.727c2.134-3.812 6.784-5.793 10.977-5.793 4.878 0 9.147 2.21 11.129 6.555 2.9-4.878 7.242-6.555 12.045-6.555 6.708 0 13.11 4.268 13.11 14.1v20.15h-8.537v-18.7c0-4.345-2.211-7.624-7.166-7.624-4.65 0-7.7 3.659-7.7 8.233v18.092h-8.69v-18.7c0-4.27-2.135-7.624-7.166-7.624-4.727 0-7.7 3.508-7.7 8.233v18.092zM181.294.367a5.642 5.642 0 015.645 5.644 5.58 5.58 0 01-5.645 5.571 5.564 5.564 0 01-5.57-5.571 5.627 5.627 0 015.57-5.644M176.949 16.746h8.766v33.185h-8.766zM200.498 49.936h-8.843V16.751h8.614v4.955a12.327 12.327 0 0110.978-6.021c9.071 0 13.415 6.555 13.415 14.712v19.54h-8.841V31.921c0-4.574-2.059-8.232-7.624-8.232-5.031 0-7.7 3.888-7.7 8.767zM20.355 42.16a12.58 12.58 0 01-12.58-12.58 12.58 12.58 0 0112.58-12.581v12.58l11.964-3.9a12.569 12.569 0 01.616 3.9 12.58 12.58 0 01-12.58 12.58m0-32.935A20.355 20.355 0 000 29.58a20.356 20.356 0 0020.355 20.355A20.356 20.356 0 0040.71 29.58 20.355 20.355 0 0020.355 9.225" />
      </G>
    </Svg>
  );
}

export default SvgComponent;