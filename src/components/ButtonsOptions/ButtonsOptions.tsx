import { PropsButtonOptions } from "src/types/types";

export const ButtonsOptions = ({ option, handleClick, isDisable }: PropsButtonOptions) => (
  <button disabled={isDisable} onClick={(e) => handleClick(option, e)}>{option}</button>
)
