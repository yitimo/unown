declare namespace JSX {
  interface IntrinsicElements {
    view: React.PropsWithChildren & { bindtap?: () => void };
  }
}
