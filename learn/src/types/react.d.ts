import 'react'

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  export function useEffectEvent<T extends Function>(callback: T): T
}
