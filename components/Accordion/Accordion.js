// React
import { useState } from "react"

// React components
import AccordionItem from "./AccordionItem"
import ColorsForm from "./ColorsForm"
import LogoForm from "./LogoForm"
import SettingsForm from "./SettingsForm"

// Constants
import { ACCORDION_ITEMS_CLOSED } from "./Accordion.constants"

const Accordion = () => {
  const [accordionItemsOpen, setAccordionItemsOpen] = useState({
    colors: true,
    appearance: false,
    settings: false,
    logo: false,
  })

  return (
    <div className="print-hide">
      <AccordionItem
        title="Barvy"
        icon="sparkles"
        open={accordionItemsOpen.colors}
        onHeaderClick={() => {
          if (accordionItemsOpen.colors === true) {
            setAccordionItemsOpen({
              ...ACCORDION_ITEMS_CLOSED,
            })
          } else {
            setAccordionItemsOpen({
              ...ACCORDION_ITEMS_CLOSED,
              colors: true,
            })
          }
        }}
      >
        <ColorsForm />
      </AccordionItem>
      {/* <AccordionItem
        title="Vzhled"
        icon="qrCode"
        open={accordionItemsOpen.appearance}
        onHeaderClick={() => {
          if (accordionItemsOpen.appearance === true) {
            setAccordionItemsOpen({
              ...ACCORDION_ITEMS_CLOSED,
            })
          } else {
            setAccordionItemsOpen({
              ...ACCORDION_ITEMS_CLOSED,
              appearance: true,
            })
          }
        }}
      >
        TODO VZHLED
      </AccordionItem> */}
      <AccordionItem
        title="Logo (beta)"
        icon="image"
        open={accordionItemsOpen.logo}
        onHeaderClick={() => {
          if (accordionItemsOpen.logo === true) {
            setAccordionItemsOpen({
              ...ACCORDION_ITEMS_CLOSED,
            })
          } else {
            setAccordionItemsOpen({
              ...ACCORDION_ITEMS_CLOSED,
              logo: true,
            })
          }
        }}
      >
        <LogoForm />
      </AccordionItem>
      <AccordionItem
        title="Nastavení"
        icon="settings"
        open={accordionItemsOpen.settings}
        onHeaderClick={() => {
          if (accordionItemsOpen.settings === true) {
            setAccordionItemsOpen({
              ...ACCORDION_ITEMS_CLOSED,
            })
          } else {
            setAccordionItemsOpen({
              ...ACCORDION_ITEMS_CLOSED,
              settings: true,
            })
          }
        }}
      >
        <SettingsForm />
      </AccordionItem>
    </div>
  )
}
export default Accordion
