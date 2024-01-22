// app/javascript/components/ServerDropdown.jsx
import React from "react";
import { PlusIcon, Pencil1Icon, CaretDownIcon } from "@radix-ui/react-icons";
import {
  Flex,
  Text,
  Button,
  Theme,
  Box,
  Card,
  Avatar,
  DropdownMenu,
} from "@radix-ui/themes";

const ServerDropdown = () => {
  // Placeholder data - replace this with server data fetched from your Rails backend
  const servers = ["Server 1", "Server 2", "Server 3"];

  return (
    <div>
      <Theme radius="medium" scaling="95%" appearance="dark">
        <Flex direction="column" gap="2">
          <Button>Let's go</Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft">
                Options
                <CaretDownIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                  <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator />
              <DropdownMenu.Item>Share</DropdownMenu.Item>
              <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </Theme>
    </div>
  );
};

export default ServerDropdown;
