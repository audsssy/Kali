import { useState, useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { Text, HStack, Link, Icon, UnorderedList, ListItem } from "@chakra-ui/react";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { PDFDownloadLink } from "@react-pdf/renderer"
import RicardianTemplate from "../../legal/formation/llc/series/RicardianTemplate"
import DelawareOAtemplate from "../../legal/formation/llc/DelawareOAtemplate"
import DelawareInvestmentClubTemplate from "../../legal/formation/llc/DelawareInvestmentClubTemplate"
import WyomingOAtemplate from "../../legal/formation/llc/WyomingOAtemplate";

export default function Ricardian() {
  const value = useContext(AppContext);
  const { dao } = value.state;
  const [isClient, setIsClient] = useState(false)
  const [ricardianId, setRicardianId] = useState(0)

  useEffect(() => {
    setIsClient(true)
    setRicardianId(dao["ricardian"]["series"])
  }, [])
  
  return (
    <>
      {dao["ricardian"] == null ? (
        "None"
      ) : (
        <UnorderedList>
          <ListItem>
            Name: Ricardian LLC, {dao["ricardian"]["series"]} Series
          </ListItem>
          <ListItem>
            <Text>Common URI: </Text>
            <Link passHref href={dao["ricardian"]["commonURI"]}>
              <Icon as={BsFillArrowUpRightSquareFill} />
            </Link>
          </ListItem>
          <ListItem>
            <Text>Master Operating Agreement: </Text>
            <Link passHref href={dao["ricardian"]["masterOperatingAgreement"]}>
              <Icon as={BsFillArrowUpRightSquareFill} />
            </Link>
          </ListItem>
          <ListItem>
            <Text>Series Operating Agreement: </Text>
            {isClient && (
              <PDFDownloadLink
                document={<RicardianTemplate ricardianId={ricardianId} />}
                fileName="FORM"
              >
                {({ loading }) =>
                  loading ? (
                    <button>Loading Document...</button>
                  ) : (
                    <button>Download</button>
                  )
                }
              </PDFDownloadLink>
            )}
          </ListItem>
          <ListItem>
            <Text>Delaware Operating Agreement: </Text>
            {isClient && (
              <PDFDownloadLink
                document={
                  <DelawareOAtemplate
                    name={"NAME"}
                    chain={"CHAIN"}
                    date={"DATE"}
                    arbitrator={"ARBITRATOR"}
                    ethAddress={"ETH ADDRESS"}
                  />
                }
                fileName="FORM"
              >
                {({ loading }) =>
                  loading ? (
                    <button>Loading Document...</button>
                  ) : (
                    <button>Download</button>
                  )
                }
              </PDFDownloadLink>
            )}
          </ListItem>
          <ListItem>
            <Text>Delaware Investment Club Agreement: </Text>
            {isClient && (
              <PDFDownloadLink
                document={
                  <DelawareInvestmentClubTemplate
                    name={"NAME"}
                    chain={"CHAIN"}
                    client={"CLIENT"}
                    network={"NETWORK"}
                    address={"ADDRESS"}
                    code={"CODE"}
                    reference={"REFERENCE"}
                  />
                }
                fileName="FORM"
              >
                {({ loading }) =>
                  loading ? (
                    <button>Loading Document...</button>
                  ) : (
                    <button>Download</button>
                  )
                }
              </PDFDownloadLink>
            )}
          </ListItem>
          <ListItem>
            <Text>Wyoming Operating Agreement: </Text>
            {isClient && (
              <PDFDownloadLink
                document={
                  <WyomingOAtemplate
                    name={"NAME"}
                    date={"DATE"}
                    email={"EMAIL"}
                    ethAddress={"ETH ADDRESS"}
                    id={"ID"}
                  />
                }
                fileName="FORM"
              >
                {({ loading }) =>
                  loading ? (
                    <button>Loading Document...</button>
                  ) : (
                    <button>Download</button>
                  )
                }
              </PDFDownloadLink>
            )}
          </ListItem>
        </UnorderedList>
      )}
    </>
  )
}
