import { Dialog, useModalController } from "react-modal-pro"
import { Box, Button, Text } from "@/components/ui/primitives"
import type { ReactNode } from "react"

type ConfirmModalProps = {
  TriggerElement: ReactNode
  type?: "logout"
  handleConfirm: () => void
  modalKey?: string
  data: {
    title: string
    description: string
    buttons: {
      cancel: string
      confirm: string
    }
  }
}

const ConfirmModal = ({ TriggerElement, handleConfirm, modalKey = "confirm", data }: ConfirmModalProps) => {
  const { handleCloseModal } = useModalController(modalKey)
  return (
    <Dialog
      modalKey={modalKey}
      TriggerElement={TriggerElement}
    >
      <Box className="flex w-full h-full flex-col justify-between items-center gap-6">
        {data.title &&
          <Text variant="body-large">
            {data.title}
          </Text>
        }
        <Text>
          {data.description}
        </Text>
        <Box className="grid grid-cols-2 gap-3 [&>button]:w-full w-full">
          <Button
            size="large"
            variant="primary"
            onClick={handleCloseModal}
          >
            {data.buttons.cancel}
          </Button>
          <Button
            size="large"
            variant="ghost"
            className="bg-primary-50 rounded-sm"
            onClick={() => {
              handleConfirm()
              handleCloseModal()
            }}
          >
            {data.buttons.confirm}
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}

export default ConfirmModal