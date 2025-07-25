declare module "lodash.debounce" {
  function debounce(
    func: Function,
    wait: number,
    options?: { leading?: boolean; trailing?: boolean; maxWait?: number }
  ): Function;
  export = debounce;
}
