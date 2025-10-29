import { Box, Image, Text } from '../ui/primitives'

const Sidebar = () => {
    return (
        <Box className="w-1/3 flex flex-col items-center text-center gap-4 bg-[#F2EAE1] p-3">
            <Text variant="h6">{"SAVVYTECH"}</Text>
            <Image
                src="/assets/images/avatar.jpg"
                alt="avatar"
                width={100}
                height={100}
                className="rounded-full object-cover"
            />
        </Box>
    )
}

export default Sidebar