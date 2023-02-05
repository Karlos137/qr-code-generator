// React components
import Card from "./Card"
import Button from "../Button"

const InfoCards = () => {
  return (
    <div className="my-16 flex flex-col gap-10 px-5 lg:my-32 lg:gap-8">
      <Card orientation="right" id="jak-na-to">
        <h2 className="mb-2 text-[21px] font-medium lg:mb-4">Jak na to?</h2>
        <p className="mb-2.5 lg:mb-4">
          QR kód vytvoříte jednoduše pomocí našeho generátoru výše.
        </p>
        <ol className="mb-5 list-inside list-decimal lg:mb-6">
          <li className="relative left-[3px] pl-2">
            Zvolte typ informace, kterou chcete do QR kódu vložit
          </li>
          <li className="pl-2">
            Vyplňte pole v generátoru a nastavte jeho vzhled
          </li>
          <li className="pl-2">
            Stáhněte si svůj QR kód ve vámi preferovaném formátu
          </li>
        </ol>
        <Button>Začít tvořit QR kód</Button>
      </Card>
      <Card orientation="left" id="co-je-to-qr-kod">
        <h2 className="mb-2 text-[21px] font-medium lg:mb-4">
          Co je to QR kód?
        </h2>
        <p className="mb-4">
          QR kód (Quick Response code) je druh čárového kódu, který se používá
          pro rychlé a snadné přenášení informací. Obsahuje textové nebo číselné
          informace, které lze snadno a rychle přečíst pomocí kamery a aplikací
          na chytrém telefonu. QR kódy se často používají pro marketing,
          ukládání kontaktů, rychlý přístup k internetovým stránkám nebo ke
          stažení aplikací.
        </p>
        <p>
          QR kódy jsou efektivním a jednoduchým způsobem, jak přenášet
          informace.
        </p>
      </Card>
    </div>
  )
}
export default InfoCards
