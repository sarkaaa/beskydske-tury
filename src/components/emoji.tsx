import * as React from "react"
import styled, { css } from "styled-components"

const StyledEmoji = styled.span<{ $emojiSize: string }>(
  ({ $emojiSize }) => css`
    font-size: ${$emojiSize === "small" ? "1rem" : "10rem"};
  `
)

type Props = {
  symbol: string
  label: string
  emojiSize?: "small" | "large"
}

const Emoji = ({ symbol, label, emojiSize = "small" }: Props) => (
  <StyledEmoji
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
    $emojiSize={emojiSize}
  >
    {symbol}
  </StyledEmoji>
)

export default Emoji
