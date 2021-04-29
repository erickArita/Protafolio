import { onDestroy, onMount } from "svelte";

let observer
export function useObserver(
  target: string,
  options: IntersectionObserverInit,
  cb: (e:IntersectionObserverEntry) => void
) {

  observer = new IntersectionObserver(([e]) => cb(e), options)
  onMount(() => {
    observer.observe(document.querySelector(target))
  })
  onDestroy(() => observer.unobserve(document.querySelector(target)))
}
