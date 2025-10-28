import { useEffect, type ReactNode } from "react"
import { ProModalProvider } from "react-modal-pro"

const ModalProvider = ({ children }: { children: ReactNode }) => {

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty("--react-modal-pro-sheet-radius", "16px")
    root.style.setProperty("--react-modal-pro-sheet-padding", "16px")
  }, [])

  return (
    <ProModalProvider>
      {children}
    </ProModalProvider>
  )
}

export default ModalProvider
