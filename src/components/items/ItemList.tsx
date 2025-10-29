import ItemCard from "./ItemCard"
import { List, Text } from "../ui/primitives"

interface Props {
  items: Item[]
  onEdit: (item: Item) => void
  onDelete: (id: string) => void
}

const ItemList: React.FC<Props> = ({ items, onEdit, onDelete }) => {
  if (!items.length)
    return (
      <Text
        variant="body-small"
        className="text-gray-500 text-center p-3"
      >
        {"No items found. Click “Create” to add one."}
      </Text>
    )

  return (
    <List className="flex flex-col gap-2.5 px-4">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </List>
  )
}

export default ItemList
