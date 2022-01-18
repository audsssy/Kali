import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import {
  Button,
} from "@chakra-ui/react"

import { TiThMenu } from "react-icons/ti";
import { useDisclosure } from "@chakra-ui/react"
import DraftDoc from "../tools/DraftDoc";

export default function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        aria-label="Information Menu"
        icon={<TiThMenu />}
        variant="ghost"
        transition="all 0.2s"
        _hover={{ bg: "kali.400" }}
        _expanded={{ bg: "kali.400" }}
      />
      <MenuList>
        <MenuGroup title="General">
          <MenuItem _focus={{ bg: "kali.700" }}>My DAOs</MenuItem>
          <MenuItem _focus={{ bg: "kali.700" }}>Tools</MenuItem>
          {/*TODO: Add Tools Sub-Menu*/}
        </MenuGroup>
        <MenuGroup title="Help">
          <MenuItem _focus={{ bg: "kali.700" }}>FAQs</MenuItem>
          <MenuItem _focus={{ bg: "kali.700" }}>Docs</MenuItem>
          <MenuItem _focus={{ bg: "kali.700" }}>Support</MenuItem>
          
            <Button onClick={onOpen}>Open Modal</Button>
          
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <DraftDoc />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}
