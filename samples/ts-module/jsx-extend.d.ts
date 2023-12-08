declare namespace JSX {
  interface IntrinsicElements {
    'my-view': React.PropsWithChildren & { bindtap?: () => void };
  }
}
