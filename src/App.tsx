import { Fragment, useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/layout/MainContent";
import ItemModal from "./components/items/ItemModal";
import { useModalController } from "react-modal-pro";
import { useLocalStorage } from "./lib/hooks";
import { Box } from "./components/ui/primitives";

function App() {
  const [items, setItems] = useLocalStorage<Item[]>("items", []);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const { handleOpenModal, handleCloseModal } = useModalController("item-modal");

  const handleCreate = () => {
    setEditingItem(null);
    handleOpenModal();
  };

  const handleSubmit = (data: { title: string; subtitle: string }) => {
    if (editingItem) {
      // update
      const updated = items.map((it) =>
        it.id === editingItem.id ? { ...it, ...data } : it
      );
      setItems(updated);
    } else {
      // create
      const newItem: Item = {
        id: crypto.randomUUID(),
        dateCreated: new Date().toISOString(),
        title: data.title,
        subtitle: data.subtitle,
      };
      setItems([...items, newItem]);
    }
    setEditingItem(null);
    handleCloseModal();
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
    handleOpenModal();
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Fragment>
      <Box className="flex w-full h-svh bg-gray-50">
        <Sidebar />
        <MainContent items={items} onCreate={handleCreate} onEdit={handleEdit} onDelete={handleDelete} />
      </Box>

      <ItemModal
        editingItem={editingItem}
        onSubmit={handleSubmit}
        onCancel={handleCloseModal}
      />
    </Fragment>
  );
}

export default App;
