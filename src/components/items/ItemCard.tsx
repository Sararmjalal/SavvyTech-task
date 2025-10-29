import { Edit, Trash } from "@/assets/icons"
import { Box, Button, ListItem, Text } from "../ui/primitives"
import ConfirmModal from "./ConfirmModal"
import { useModalController } from "react-modal-pro"

interface Props {
  item: Item
  onEdit: (item: Item) => void
  onDelete: (id: string) => void
}

const ItemCard: React.FC<Props> = ({ item, onEdit, onDelete }) => {

const {handleOpenModal} = useModalController("confirm-delete")

  return (
    <>
      <ListItem className="bg-white p-3 rounded shadow-sm flex justify-between items-center">
        <Box className="flex flex-col gap-1">
          <Text className="font-semibold">{item.title}</Text>
          <Text className="text-gray-600 text-sm">{item.subtitle}</Text>
          <Text variant="label-small" className="text-gray-400">
            {`${new Date(item.dateCreated).toLocaleString()}`}
          </Text>
        </Box>

        <Box className="flex gap-3 items-center">
          <Button variant="ghost" onClick={() => onEdit(item)}>
            <Edit />
          </Button>
          <Button variant="ghost" onClick={handleOpenModal}>
            <Trash />
          </Button>
        </Box>
      </ListItem>

        <ConfirmModal
          TriggerElement={null}
          modalKey={"confirm-delete"}
          handleConfirm={() => onDelete(item.id)}
          data={{
            title: "Confirm Delete",
            description: `Are you sure you want to delete "${item.title}"?`,
            buttons: {
              cancel: "Cancel",
              confirm: "Delete",
            },
          }}
        />
    </>
  )
}

export default ItemCard
