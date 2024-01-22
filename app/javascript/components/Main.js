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

const Main = () => {
  // Placeholder data - replace this with server data fetched from your Rails backend
  const servers = ["Server 1", "Server 2", "Server 3"];

  return (
    <Theme radius="medium" scaling="95%" appearance="dark">
      <Flex direction="column" gap="2">
        <Button>Let's go</Button>
      </Flex>
    </Theme>
  );
};

export default Main;
