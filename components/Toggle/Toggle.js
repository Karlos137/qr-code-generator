import { Switch } from "@headlessui/react"

const Toggle = ({ label, enabled, onChange }) => {
  return (
    <Switch.Group>
      <div className="flex items-center gap-2.5">
        <Switch
          checked={enabled}
          onChange={onChange}
          className={`${
            enabled
              ? "border-orange-500 bg-orange-500"
              : "border-sky-600 bg-white"
          } relative inline-flex h-5 w-8.5 items-center rounded-full border-[1px]`}
        >
          <span className="sr-only">{label}</span>
          <span
            className={`${
              enabled
                ? "translate-x-3.5 bg-white"
                : "translate-x-0.5 bg-sky-600"
            } inline-block h-4 w-4 transform rounded-full  transition`}
          />
        </Switch>
        <Switch.Label className="text-sm font-light">{label}</Switch.Label>
      </div>
    </Switch.Group>
  )
}

export default Toggle
