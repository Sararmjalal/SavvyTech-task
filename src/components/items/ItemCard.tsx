import { Edit, Trash } from "@/assets/icons"
import { Box, Button, ListItem, Text } from "../ui/primitives"

interface Props {
  item: Item
  onEdit: (item: Item) => void
  onDelete: (id: string) => void
}

const ItemCard: React.FC<Props> = ({ item, onEdit, onDelete }) => (
  <ListItem className="bg-white p-3 rounded shadow-sm flex justify-between items-center">
    <Box className="flex flex-col">
      <Text className="font-semibold">
        {item.title}
      </Text>
      <Text className="text-gray-600 text-sm">
        {item.subtitle}
      </Text>
      <Text className="text-gray-400 text-xs">
        {`Created: ${new Date(item.dateCreated).toLocaleString()}`}
      </Text>
    </Box>

    <Box className="flex gap-3 items-center">
      <Button
        variant="ghost"
        onClick={() => onEdit(item)}
      >
        <Edit />
      </Button>
      <Button
        variant="ghost"
        onClick={() => onDelete(item.id)}
      >
        <Trash />
      </Button>
    </Box>
  </ListItem>
)

export default ItemCard
