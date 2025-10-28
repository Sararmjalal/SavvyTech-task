import { Fragment } from "react/jsx-runtime";
import { Box, Button, Image, List, ListItem, Text, TextField } from "./components/ui/primitives";
import { Dialog, useModalController } from "react-modal-pro";
import { Edit, Trash } from "./assets/icons";

function App() {
  const { handleOpenModal } = useModalController("create-item");

  const items = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    dateCreated: new Date().toISOString(),
    title: `Item ${i + 1}`,
    subtitle: `Subtitle ${i + 1}`,
  }));

  return (
    <Fragment>
      <Box className="flex w-full bg-red-500 h-svh">
        {/* Sidebar */}
        <Box className="w-1/3 flex flex-col items-center text-center gap-4 bg-[#F2EAE1] p-3">
          <Text variant="h6">{"SAVVYTECH"}</Text>
          <Image
            src="/assets/images/avatar.jpg"
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full outline-hidden object-cover"
          />
        </Box>

        {/* Main Content */}
        <Box className="w-2/3 bg-[#F8F8F8] flex flex-col gap-3">
          <Box className="w-full bg-white px-4 py-3">
            <TextField />
          </Box>

          <Box className="px-4 w-full flex justify-between items-center">
            <Text>{"Items List"}</Text>
            <Button variant="primary" className="px-2" onClick={handleOpenModal}>
              {"Create"}
            </Button>
          </Box>

          {/* Item List */}
          <List className="flex flex-col gap-2.5 px-4">
            {items.map((item) => (
              <ListItem
                key={item.id}
                className="bg-white p-3 rounded shadow-sm flex justify-between items-center"
              >
                {/* Left side: Text info */}
                <Box className="flex flex-col">
                  <Text className="font-semibold">{item.title}</Text>
                  <Text className="text-gray-600 text-sm">{item.subtitle}</Text>
                  <Text className="text-gray-400 text-xs">
                    Created: {new Date(item.dateCreated).toLocaleString()}
                  </Text>
                </Box>

                {/* Right side: Icons */}
                <Box className="flex gap-3 items-center">
                  <Button
                    variant="ghost"
                    className="p-1 hover:bg-gray-100 rounded"
                    onClick={() => console.log("Edit", item.id)}
                  >
                    <Edit className="w-5 h-5 text-blue-600" />
                  </Button>

                  <Button
                    variant="ghost"
                    className="p-1 hover:bg-gray-100 rounded"
                    onClick={() => console.log("Delete", item.id)}
                  >
                    <Trash className="w-5 h-5 text-red-600" />
                  </Button>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* Create Modal */}
      <Dialog TriggerElement={null} modalKey="create-item">
        HEY
      </Dialog>
    </Fragment>
  );
}

export default App;
