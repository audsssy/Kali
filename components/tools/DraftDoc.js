import React, { useState, useRef } from "react"
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  FormControl,
  FormLabel,
  Input,
  DrawerFooter,
  Stack,
  useDisclosure,
  Textarea,
  Select,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { Field } from "formik"

function DraftDoc() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { handleSubmit, register } = useForm()
  const initialField = useRef()

  const handleSend = (values) => {
    console.log(values)
    onClose()
  }

  const handleSelect = (e) => {
    console.log(e)
  }

  return (
    <>
      <Button onClick={onOpen}>Contact us</Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        initialFocusRef={initialField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>What do you need help with?</DrawerHeader>
          <DrawerBody>
            <Stack
              as="form"
              id="contact-form"
              onSubmit={handleSubmit(handleSend)}
              spacing={2}
            >
              <FormControl>
                <FormLabel htmlFor="name">Select an agreement:</FormLabel>
                <Select onChange={(e) => {handleSelect(e)}} id="agreement" placeholder="Select option" {...register("agreement")}>
                  <option value="delaware-llc">Delaware LLC</option>
                  <option value="delaware-ic">Delaware Investment Club</option>
                  <option value="wyoming-llc">Wyoming LLC</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  ref={initialField}
                  id="name"
                  placeholder="Enter your name"
                  {...register("name")}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  {...register("email")}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <Input
                  id="subject"
                  placeholder="Enter the subject"
                  {...register("subject")}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  id="message"
                  placeholder="Enter a description of your needs"
                  {...register("message")}
                />
              </FormControl>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button type="submit" form="contact-form" mr={3}>
              Send
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DraftDoc
