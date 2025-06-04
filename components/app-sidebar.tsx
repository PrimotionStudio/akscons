import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  ChevronRight,
  GraduationCap,
  Home,
  Inbox,
  Newspaper,
  School2,
} from "lucide-react";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

export function AppSidebar() {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "About Us",
      url: "/about-us",
      icon: Inbox,
    },
    {
      title: "Academics",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Department of Nursing Sciences",
          url: "#",
        },
        {
          title: "Department of Midwifery",
          url: "#",
        },
        {
          title: "Department of Basic Medical Sciences",
          url: "#",
        },
      ],
    },
    {
      title: "News",
      url: "/news",
      icon: Newspaper,
    },
    {
      title: "Our Campuses",
      url: "#",
      icon: School2,
      items: [
        {
          title: "Ikot Ekpene",
          url: "#",
        },
        {
          title: "Lagos",
          url: "#",
        },
        {
          title: "Kaduna",
          url: "#",
        },
        {
          title: "Port Harcourt",
          url: "#",
        },
      ],
    },
  ];

  return (
    <Sidebar className="lg:hidden">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="flex items-center gap-4">
              <Image
                src="/akscons.png"
                alt="Akwa Ibom State College of Nursing Sciences"
                width={80}
                height={80}
                className="object-contain"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-green-900">
                  Akwa Ibom State College of Nursing Sciences
                </h1>
                <p className="text-sm text-gray-600">Ikot Ekpene</p>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, i) =>
                item.items ? (
                  <Collapsible key={i} className="group/collapsible" asChild>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title} size="lg">
                          <item.icon className="text-green-900" />
                          <span className="text-lg text-green-900">
                            {item.title}
                          </span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem
                              key={subItem.title}
                              className="my-2"
                            >
                              <SidebarMenuSubButton asChild>
                                <a href={subItem.url}>
                                  <span className="text-lg">
                                    {subItem.title}
                                  </span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={i}>
                    <SidebarMenuButton size="lg" asChild>
                      <a href={item.url}>
                        <item.icon className="text-green-900" />
                        <span className="text-lg text-green-900">
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ),
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
