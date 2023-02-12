import { useEffect, useRef } from "react"

const isSSR = !(typeof window !== "undefined" && window.document?.createElement)

const useEventListener = (
  eventType,
  callback,
  element = isSSR ? undefined : window
) => {
  // Save callback as ref and update it only when changes -> to prevent re-renders
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const target = element && "current" in element ? element.current : element

    target?.addEventListener(eventType, callback)

    return () => {
      target?.removeEventListener(eventType, callback)
    }
  }, [eventType, element])
}
export default useEventListener
