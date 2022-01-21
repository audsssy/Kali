import React, { useState, useEffect, useRef } from "react"
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
  VStack,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { PDFDownloadLink } from "@react-pdf/renderer"
import DelawareOAtemplate from "../../legal/formation/llc/DelawareOAtemplate"
import DelawareInvestmentClubTemplate from "../../legal/formation/llc/DelawareInvestmentClubTemplate"
import WyomingOAtemplate from "../../legal/formation/llc/WyomingOAtemplate"


function DraftDoc() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { handleSubmit, register } = useForm()
  const [selection, setSelection] = useState("")
  const [deLlcForm, setDeLlcForm] = useState(false)
  const [deIcForm, setDeIcForm] = useState(false)
  const [wyLlcForm, setWyLlcForm] = useState(false)
  const [delawareLlc, setDelawareLlc] = useState({})
  const [delawareIc, setDelawareIc] = useState({})
  const [wyomingLlc, setWyomingLlc] = useState({})
  const initialField = useRef()

  const handleSend = (values) => {
    values.agreement = selection
    switch (selection) {
      case "delaware-llc":
        setDelawareLlc({
          name: values.name,
          chain: values.chain,
          date: values.date,
          ethAddress: values.ethAddress,
          arbitrator: values.arbitrator,
        })
        setDeLlcForm(true)
      case "delaware-ic":
        setDelawareIc({
          name: values.name,
          chain: values.chain,
          client: values.client,
          network: values.network,
          address: values.address,
          code: values.code,
          reference: values.reference,
        })
        setDeIcForm(true)
      case "wyoming-llc":
        setWyomingLlc({
          name: values.name,
          date: values.date,
          email: values.email,
          ethAddress: values.ethAddress,
          id: values.id,
        })
        setWyLlcForm(true)
    }

    console.log(values)
  }

  useEffect(() => {
    console.log(selection)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection])

  return (
    <>
      <Button onClick={onOpen}>Draft</Button>
      <Drawer isOpen={isOpen} placement="bottom" initialFocusRef={initialField}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>✂️</DrawerHeader>
          <DrawerBody>
            <Stack
              as="form"
              id="contact-form"
              onSubmit={handleSubmit(handleSend)}
              spacing={2}
            >
              <FormControl>
                <FormLabel htmlFor="name">Select an agreement:</FormLabel>
                <Select
                  onChange={(e) => {
                    setSelection(e.target.value)
                    setDeLlcForm(false)
                    setDeIcForm(false)
                    setWyLlcForm(false)
                  }}
                  id="agreement"
                  placeholder="Select option"
                >
                  <option value="delaware-llc">Delaware LLC</option>
                  <option value="delaware-ic">Delaware Investment Club</option>
                  <option value="wyoming-llc">Wyoming LLC</option>
                </Select>
              </FormControl>
              {selection === "delaware-llc" && (
                <>
                  <FormControl>
                    <FormLabel mt={3} htmlFor="name">
                      DAO LLC Name
                    </FormLabel>
                    <Input
                      ref={initialField}
                      id="name"
                      placeholder="KALI"
                      {...register("name")}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel mt={1} htmlFor="chain">
                      Designated Blockchain
                    </FormLabel>
                    <Input
                      id="chain"
                      placeholder="Ethereum mainnet, Arbitrum, Matic, etc."
                      {...register("chain")}
                    />
                    <FormControl>
                      <FormLabel mt={1} htmlFor="date">
                        Formation Date
                      </FormLabel>
                      <Input
                        id="date"
                        placeholder="MM/DD/YYYY"
                        {...register("date")}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel mt={1} htmlFor="ethAddress">
                        DAO LLC Organizer Ethereum Address
                      </FormLabel>
                      <Input
                        id="ethAddress"
                        placeholder="0xKALI"
                        {...register("ethAddress")}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel mt={1} htmlFor="arbitrator">
                        Arbitrator
                      </FormLabel>
                      <Input
                        id="arbitrator"
                        placeholder="JAMS, LexDAO, etc."
                        {...register("arbitrator")}
                      />
                    </FormControl>
                  </FormControl>
                </>
              )}
              {selection === "delaware-ic" && (
                <>
                  <FormControl>
                    <FormLabel mt={3} htmlFor="name">
                      DAO LLC NAME
                    </FormLabel>
                    <Input
                      ref={initialField}
                      id="name"
                      placeholder="KALI"
                      {...register("name")}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel mt={1} htmlFor="chain">
                      Designated Blockchain
                    </FormLabel>
                    <Input
                      id="chain"
                      placeholder="Ethereum mainnet, Arbitrum, Matic, etc."
                      {...register("chain")}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel mt={1} htmlFor="client">
                      Designated Blockchain Client
                    </FormLabel>
                    <Input
                      id="client"
                      placeholder="Geth, OpenEthereum, etc."
                      {...register("client")}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel mt={1} htmlFor="network">
                      Designated Blochain Network
                    </FormLabel>
                    <Input
                      id="network"
                      placeholder="Bitcoin, Ethereum, etc."
                      {...register("network")}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel mt={1} htmlFor="address">
                      Designated Smart Contract Address
                    </FormLabel>
                    <Input
                      id="address"
                      placeholder="0xKALI"
                      {...register("address")}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel mt={1} htmlFor="code">
                      Designated Smart Contract Source Code
                    </FormLabel>
                    <Input
                      id="code"
                      placeholder="Enter code"
                      {...register("code")}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel mt={1} htmlFor="reference">
                      Designated Smart Contract Source Code Reference (url)
                    </FormLabel>
                    <Input
                      id="reference"
                      placeholder="https://test.kalidao.xyz/"
                      {...register("reference")}
                    />
                  </FormControl>
                </>
              )}
              {selection === "wyoming-llc" && (
                <>
                  <FormControl>
                    <FormLabel mt={3} htmlFor="name">
                      DAO LLC Name
                    </FormLabel>
                    <Input
                      ref={initialField}
                      id="name"
                      placeholder="KALI"
                      {...register("name")}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel mt={1} htmlFor="date">
                      Formation Date
                    </FormLabel>
                    <Input
                      id="date"
                      placeholder="MM/DD/YYYY"
                      {...register("date")}
                    />
                    <FormControl>
                      <FormLabel mt={1} htmlFor="subject">
                        DAO LLC Organizer Email
                      </FormLabel>
                      <Input
                        id="email"
                        placeholder="kalidao@protonmail.com"
                        {...register("email")}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel mt={1} htmlFor="ethAddress">
                        DAO LLC Organizer EthAddress
                      </FormLabel>
                      <Input
                        id="ethAddress"
                        placeholder="0xKALI"
                        {...register("ethAddress")}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel mt={1} htmlFor="id">
                        Books and Records
                      </FormLabel>
                      <Input
                        id="id"
                        placeholder="Enter IPFS hash"
                        {...register("id")}
                      />
                    </FormControl>
                  </FormControl>
                </>
              )}
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            {(deLlcForm && (
              <PDFDownloadLink
                document={
                  <DelawareOAtemplate
                    name={delawareLlc.name}
                    chain={delawareLlc.chain}
                    date={delawareLlc.date}
                    ethAddress={delawareLlc.ethAddress}
                    arbitrator={delawareLlc.arbitrator}
                  />
                }
                fileName="Delaware Opearting Agreement"
              >
                {({ loading }) =>
                  loading ? (
                    <Button mr={3}>Loading Document...</Button>
                  ) : (
                    <Button mr={3}>Download</Button>
                  )
                }
              </PDFDownloadLink>
            )) ||
              (deIcForm && (
                <PDFDownloadLink
                  document={
                    <DelawareInvestmentClubTemplate
                      name={delawareIc.name}
                      chain={delawareIc.chain}
                      client={delawareIc.date}
                      network={delawareIc.network}
                      address={delawareIc.address}
                      code={delawareIc.code}
                      reference={delawareIc.reference}
                    />
                  }
                  fileName="Delaware Investment Club"
                >
                  {({ loading }) =>
                    loading ? (
                      <Button mr={3}>Loading Document...</Button>
                    ) : (
                      <Button mr={3}>Download</Button>
                    )
                  }
                </PDFDownloadLink>
              )) ||
              (wyLlcForm && (
                <PDFDownloadLink
                  document={
                    <WyomingOAtemplate
                      name={wyomingLlc.name}
                      date={wyomingLlc.date}
                      email={wyomingLlc.email}
                      ethAddress={wyomingLlc.ethAddress}
                      id={wyomingLlc.id}
                    />
                  }
                  fileName="Wyoming Operating Agreement"
                >
                  {({ loading }) =>
                    loading ? (
                      <Button mr={3}>Loading Document...</Button>
                    ) : (
                      <Button mr={3}>Download</Button>
                    )
                  }
                </PDFDownloadLink>
              ))}
            {}
            {}
            <Button type="submit" form="contact-form" mr={3}>
              Draft
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
