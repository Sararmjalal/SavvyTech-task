import { z } from "zod"
import { useEffect } from "react"
import { Dialog } from "react-modal-pro"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Box, Button, Text, TextField } from "../ui/primitives"

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().min(1, "Subtitle is required"),
})

type FormData = z.infer<typeof schema>

interface Props {
  editingItem: Item | null
  onSubmit: (data: FormData) => void
  onCancel: () => void
}

const CREATE_MODAL_KEY = "item-modal"
const ItemModal: React.FC<Props> = ({ editingItem, onSubmit, onCancel }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    if (editingItem) {
      reset({
        title: editingItem.title,
        subtitle: editingItem.subtitle,
      })
    } else {
      reset({ title: "", subtitle: "" })
    }
  }, [editingItem, reset])

  return (
    <Dialog TriggerElement={null} modalKey={CREATE_MODAL_KEY} >
      <Box className="bg-white p-3 rounded-lg w-full flex flex-col gap-4">
        <Text variant="h6" className="text-lg font-bold text-center">
          {editingItem ? "Edit Item" : "Create Item"}
        </Text>

        <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data)
            reset()
          })}
          className="flex flex-col gap-3"
        >
          <Box>
            <Text variant="body-medium">
              {"Title"}
            </Text>
            <TextField size="small" {...register("title")} />
            {
              errors.title &&
              <Text variant="label-xsmall" className="text-red-500">
                {errors.title.message}
              </Text>
            }
          </Box>

          <Box>
            <Text variant="body-medium">
              {"Subtitle"}
            </Text>
            <TextField  size="small"{...register("subtitle")} />
            {
              errors.subtitle &&
              <Text variant="label-xsmall" className="text-red-500">
                {errors.subtitle.message}
              </Text>
            }
          </Box>

          <Box className="flex justify-end gap-2 mt-4">
            <Button
              type="button"
              size="large"
              variant="ghost"
              onClick={onCancel}
            >
              {"Cancel"}
            </Button>
            <Button
              type="submit"
              size="large"
              variant="primary"
            >
              {editingItem ? "Update" : "Create"}
            </Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  )
}

export default ItemModal
