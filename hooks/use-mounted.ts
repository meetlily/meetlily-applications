import * as React from "react"

export function useMounted() {
  const [mounted, setMounted] = useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
