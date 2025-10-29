import { useState, useMemo } from "react"
import { Search } from "@/assets/icons"
import ItemList from "../items/ItemList"
import { Box, Button, Text, TextField } from "../ui/primitives"
import { useDebounce } from "@/lib/hooks"


interface Props {
  items: Item[]
  onCreate: () => void
  onEdit: (item: Item) => void
  onDelete: (id: string) => void
}

const MainContent: React.FC<Props> = ({ items, onCreate, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const filteredItems = useMemo(() => {
    if (!debouncedSearchTerm) return items
    const lower = debouncedSearchTerm.toLowerCase()
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        item.subtitle.toLowerCase().includes(lower)
    )
  }, [items, debouncedSearchTerm])

  return (
    <Box className="w-2/3 bg-primary-50 flex flex-col gap-3 transition-all duration-300">
      <Box className="w-full bg-primary-900 px-4 py-3 relative">
        <TextField
          size="small"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          suffix={<Search />}
        />
      </Box>

      <Box className="px-4 w-full flex justify-between items-center">
        <Text>
          {"Items List"}
        </Text>
        <Button size="medium" variant="primary" onClick={onCreate}>
          {"Create"}
        </Button>
      </Box>

      <ItemList items={filteredItems} onEdit={onEdit} onDelete={onDelete} />
    </Box>
  )
}

export default MainContent
