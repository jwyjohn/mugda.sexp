export type Pattern = Var | Ctor | Inaccessible

export type Var = {
  family: "Pattern"
  kind: "Var"
  name: string
}

export function Var(name: string): Var {
  return {
    family: "Pattern",
    kind: "Var",
    name,
  }
}

export type Ctor = {
  family: "Pattern"
  kind: "Ctor"
  name: string
  args: Array<Pattern>
}

export function Ctor(name: string, args: Array<Pattern>): Ctor {
  return {
    family: "Pattern",
    kind: "Ctor",
    name,
    args,
  }
}

export type Inaccessible = {
  family: "Pattern"
  kind: "Inaccessible"
  pattern: Pattern
}

export function Inaccessible(pattern: Pattern): Inaccessible {
  return {
    family: "Pattern",
    kind: "Inaccessible",
    pattern,
  }
}
