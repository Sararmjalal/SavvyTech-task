import { type ReactNode } from "react"
import { ProModalProvider } from "react-modal-pro"

const ModalProvider = ({ children }: { children: ReactNode }) => {

  return (
    <ProModalProvider>
      {children}
    </ProModalProvider>
  )
}

export default ModalProvider
