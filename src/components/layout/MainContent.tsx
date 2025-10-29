import { Search } from "@/assets/icons"
import ItemList from "../items/ItemList"
import { Box, Button, Text, TextField } from "../ui/primitives"

interface Props {
  items: Item[]
  onCreate: () => void
  onEdit: (item: Item) => void
  onDelete: (id: string) => void
}

const MainContent: React.FC<Props> = ({ items, onCreate, onEdit, onDelete }) => (
  <Box className="w-2/3 bg-primary-50 flex flex-col gap-3">
    <Box className="w-full bg-primary-900 px-4 py-3">
      <TextField
       size="small"
        placeholder="Search..."
        suffix={<Search />}
       />
    </Box>

    <Box className="px-4 w-full flex justify-between items-center">
      <Text>
        {"Items List"}
      </Text>
      <Button
        size="medium"
        variant="primary"
        onClick={onCreate}
      >
        {"Create"}
      </Button>
    </Box>

    <ItemList items={items} onEdit={onEdit} onDelete={onDelete} />
  </Box>
)

export default MainContent
