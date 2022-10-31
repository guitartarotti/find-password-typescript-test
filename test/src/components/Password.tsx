type PassProps = {
  pass: number
  id: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Password (props: PassProps) {
  return (
    <p key={props.id}>{props.pass}</p>
  )
}
