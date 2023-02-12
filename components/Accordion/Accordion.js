// React
import { useState } from "react"

// React components
import AccordionItem from "./AccordionItem"
import ColorsForm from "./ColorsForm"

// Constants
import { ACCORDION_ITEMS_CLOSED } from "./Accordion.constants"

const Accordion = () => {
  const [accordionItemsOpen, setAccordionItemsOpen] = useState({
    colors: true,
    appearance: false,
  })

  return (
    <div>
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
      <AccordionItem
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
        <ColorsForm />
      </AccordionItem>
    </div>
  )
}
export default Accordion
