import {
  Calendar,
  Home,
  GalleryVerticalEnd,
  LayoutList,
  Settings,
  ChartColumnStacked,
  Users,
  ListOrdered,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Banners",
    url: "#",
    icon: GalleryVerticalEnd,
  },
  {
    title: "Categories",
    url: "#",
    icon: ChartColumnStacked,
  },
  {
    title: "Products",
    url: "#",
    icon: LayoutList,
  },
  {
    title: "Customers",
    url: "#",
    icon: Users,
  },
  {
    title: "Orders",
    url: "#",
    icon: ListOrdered,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className=" bg-primary text-white">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className=" text-lg font-bold ">
            KARA
          </SidebarGroupLabel>
          <hr className="my-[20px]" />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className=" hover:shadow-lg">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
