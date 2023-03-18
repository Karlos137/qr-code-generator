import { Switch } from "@headlessui/react"

// Tailwind Merge
import { twMerge } from "tailwind-merge"

const Toggle = ({ label, enabled, onChange, disabled = false }) => {
  return (
    <Switch.Group>
      <div className="flex items-center gap-2.5">
        <Switch
          checked={enabled}
          onChange={onChange}
          disabled={disabled}
          className={twMerge(
            "relative inline-flex h-5 w-8.5 items-center rounded-full border-[1px] border-sky-600 bg-white disabled:cursor-not-allowed disabled:border-gray-50 disabled:bg-gray-200",
            enabled && "border-orange-500 bg-orange-500"
          )}
        >
          <span className="sr-only">{label}</span>
          <span
            className={twMerge(
              "inline-block h-4 w-4 translate-x-0.5 transform rounded-full bg-sky-600 transition",
              enabled && "translate-x-3.5 bg-white",
              disabled && "bg-gray-400"
            )}
          />
        </Switch>
        <Switch.Label className="text-sm font-light">{label}</Switch.Label>
      </div>
    </Switch.Group>
  )
}

export default Toggle
