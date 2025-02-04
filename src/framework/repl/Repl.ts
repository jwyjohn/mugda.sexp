import { CommonParensChecker } from "./CommonParensChecker"
import { ParensChecker } from "./ParensChecker"

export type ReplEvent = {
  text: string
}

export abstract class ReplEventHandler {
  abstract greeting(): void
  abstract handle(event: ReplEvent): Promise<boolean>
}

export abstract class Repl {
  abstract handler: ReplEventHandler
  abstract run(): Promise<void>
  parensChecker: ParensChecker = new CommonParensChecker()
}
