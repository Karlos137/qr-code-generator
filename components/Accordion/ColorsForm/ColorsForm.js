// React
import { useState, useEffect } from "react"

// React components
import Input from "../../Input"
import Toggle from "../../Toggle"

// Store
import useQrStore from "../../../store/qrStore"

// Constants
import { HEX_COLOR_REGEX } from "../../../utils/constants"
import { DEFAULT_COLORS } from "./ColorsForm.constants"

const ColorsForm = () => {
  const [colorValues, setColorValues] = useState(DEFAULT_COLORS)

  const transparentBackground = useQrStore(state => state.transparentBackground)
  const setTransparentBackground = useQrStore(
    state => state.setTransparentBackground
  )
  const colorfulCorners = useQrStore(state => state.colorfulCorners)
  const setCorolfulCorner = useQrStore(state => state.setCorolfulCorner)
  const bgColor = useQrStore(state => state.bgColor)
  const fgColor = useQrStore(state => state.fgColor)
  const eyeColor = useQrStore(state => state.eyeColor)
  const setBgColor = useQrStore(state => state.setBgColor)
  const setFgColor = useQrStore(state => state.setFgColor)
  const setEyeColor = useQrStore(state => state.setEyeColor)

  useEffect(() => {
    setColorValues({
      foreground: fgColor,
      background: bgColor,
      eyeColor: eyeColor,
    })
  }, [])

  useEffect(() => {
    if (colorfulCorners) {
      const newEyeColor = [...colorValues.eyeColor]
      setEyeColor(newEyeColor)
    } else {
      setEyeColor(DEFAULT_COLORS.eyeColor)
    }
  }, [colorfulCorners])

  const handleOnChange = e => {
    setColorValues({
      ...colorValues,
      [e.target.name]: e.target.value,
    })

    switch (e.target.name) {
      case "foreground":
        if (HEX_COLOR_REGEX.test(e.target.value)) {
          setFgColor(e.target.value)
        }
        break
      case "background":
        if (HEX_COLOR_REGEX.test(e.target.value)) {
          setBgColor(e.target.value)
        }
        break
      default:
        setFgColor(DEFAULT_COLORS.foreground)
        setBgColor(DEFAULT_COLORS.background)
    }
  }

  const handleOnCornerChange = e => {
    switch (e.target.name) {
      case "outerLtCorner":
        const newEyeColor0 = [...eyeColor]
        newEyeColor0[0] = {
          outer: e.target.value,
          inner: newEyeColor0[0].inner,
        }
        setColorValues({
          ...colorValues,
          eyeColor: newEyeColor0,
        })
        setEyeColor(newEyeColor0)
        break
      case "innerLtCorner":
        const newInnerEyeColor0 = [...eyeColor]
        newInnerEyeColor0[0] = {
          outer: newInnerEyeColor0[0].outer,
          inner: e.target.value,
        }
        setColorValues({
          ...colorValues,
          eyeColor: newInnerEyeColor0,
        })
        setEyeColor(newInnerEyeColor0)
        break
      case "outerRtCorner":
        const newEyeColor1 = [...eyeColor]
        newEyeColor1[1] = {
          outer: e.target.value,
          inner: newEyeColor1[1].inner,
        }
        setColorValues({
          ...colorValues,
          eyeColor: newEyeColor1,
        })
        setEyeColor(newEyeColor1)
        break
      case "innerRtCorner":
        const newInnerEyeColor1 = [...eyeColor]
        newInnerEyeColor1[1] = {
          outer: newInnerEyeColor1[1].outer,
          inner: e.target.value,
        }
        setColorValues({
          ...colorValues,
          eyeColor: newInnerEyeColor1,
        })
        setEyeColor(newInnerEyeColor1)
        break
      case "outerLbCorner":
        const newEyeColor2 = [...eyeColor]
        newEyeColor2[2] = {
          outer: e.target.value,
          inner: newEyeColor2[1].inner,
        }
        setColorValues({
          ...colorValues,
          eyeColor: newEyeColor2,
        })
        setEyeColor(newEyeColor2)
        break

      case "innerLbCorner":
        const newInnerEyeColor2 = [...eyeColor]
        newInnerEyeColor2[2] = {
          outer: newInnerEyeColor2[1].outer,
          inner: e.target.value,
        }
        setColorValues({
          ...colorValues,
          eyeColor: newInnerEyeColor2,
        })
        setEyeColor(newInnerEyeColor2)
        break
      default:
        setEyeColor(DEFAULT_COLORS.eyeColor)
    }
  }

  return (
    <div>
      <div className="flex flex-wrap justify-between gap-7.5 min-[1160px]:flex-nowrap">
        <Input
          id="fg-color"
          label="Popředí"
          name="foreground"
          placeholder="#"
          value={colorValues.foreground}
          onChange={handleOnChange}
          withColorForm="fgColor"
        />
        <div className="flex grow flex-col gap-2">
          <Input
            id="bg-color"
            label="Pozadí"
            name="background"
            placeholder="#"
            value={colorValues.background}
            onChange={handleOnChange}
            withColorForm="bgColor"
          />
          <Toggle
            label="Průhledné pozadí"
            enabled={transparentBackground}
            onChange={() => {
              setTransparentBackground(!transparentBackground)
            }}
          />
        </div>
      </div>
      <div className="mt-4">
        <Toggle
          label="Barevné rohy"
          enabled={colorfulCorners}
          onChange={() => {
            setCorolfulCorner(!colorfulCorners)
          }}
        />
        {colorfulCorners && (
          <div className="mt-4 flex flex-wrap justify-between gap-7.5 min-[1160px]:flex-nowrap">
            <div className="flex grow flex-col gap-2">
              <div className="mb-1">Vnější rohy:</div>
              <Input
                id="outer-lt-corner-color"
                label="Levý horní roh"
                name="outerLtCorner"
                placeholder="#"
                value={colorValues.eyeColor[0].outer}
                onChange={handleOnCornerChange}
                withColorForm="outerLtCornerColor"
              />
              <Input
                id="outer-rt-corner-color"
                label="Pravý horní roh"
                name="outerRtCorner"
                placeholder="#"
                value={colorValues.eyeColor[1].outer}
                onChange={handleOnCornerChange}
                withColorForm="outerRtCornerColor"
              />
              <Input
                id="outer-lb-corner-color"
                label="Levý dolní roh"
                name="outerLbCorner"
                placeholder="#"
                value={colorValues.eyeColor[2].outer}
                onChange={handleOnCornerChange}
                withColorForm="outerLbCornerColor"
              />
            </div>
            <div className="flex grow  flex-col gap-2">
              <div className="mb-1">Vnitřní rohy:</div>
              <Input
                id="inner-lt-corner-color"
                label="Levý horní roh"
                name="innerLtCorner"
                placeholder="#"
                value={colorValues.eyeColor[0].inner}
                onChange={handleOnCornerChange}
                withColorForm="innerLtCornerColor"
              />
              <Input
                id="inner-rt-corner-color"
                label="Pravý horní roh"
                name="innerRtCorner"
                placeholder="#"
                value={colorValues.eyeColor[1].inner}
                onChange={handleOnCornerChange}
                withColorForm="innerRtCornerColor"
              />
              <Input
                id="inner-lb-corner-color"
                label="Levý dolní roh"
                name="innerLbCorner"
                placeholder="#"
                value={colorValues.eyeColor[2].inner}
                onChange={handleOnCornerChange}
                withColorForm="innerLbCornerColor"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default ColorsForm
