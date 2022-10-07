import type {JSX as PreactJSX} from "preact"
import * as Taste from "@benchristel/taste"

declare global {
  namespace JSX {
    interface IntrinsicElements extends PreactJSX.IntrinsicElements {}
  }

  const test: typeof Taste.test
  const expect: typeof Taste.expect
  const is: typeof Taste.is
  const equals: typeof Taste.equals
  const not: typeof Taste.not
  const which: typeof Taste.which
  const debug: typeof Taste.debug
}
