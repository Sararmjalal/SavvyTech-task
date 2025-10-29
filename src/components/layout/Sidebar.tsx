import { Box, Image, Text } from '../ui/primitives'

const Sidebar = () => {
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sararmjalal/", color: "text-blue-600" },
    { label: "GitHub", href: "https://github.com/Sararmjalal", color: "text-gray-800" },
    { label: "Email", href: "mailto:sara.jalal.115@gmail.com", color: "text-red-500" },
    { label: "Phone", href: "tel:+989031346086", color: "text-green-600" },
    { label: "Portfolio", href: "https://sararmjalal.vercel.app/en", color: "text-purple-600" },
  ]

  return (
    <Box className="w-1/3 flex flex-col items-center text-center gap-4 bg-primary-200 p-6">
      <Text variant="h5">
        {"SAVVYTECH"}
      </Text>

      <Image
        src="/assets/images/avatar.jpg"
        alt="avatar"
        width={80}
        height={80}
        className="rounded-full object-cover "
      />

      <Text variant="body-medium">
        {"Sara Jalal"}
      </Text>

      <Box className="flex flex-col gap-3 text-center w-full mt-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full text-xs rounded hover:bg-gray-200 ${link.color} font-medium`}
          >
            {link.label}
          </a>
        ))}
      </Box>
    </Box>
  )
}

export default Sidebar
