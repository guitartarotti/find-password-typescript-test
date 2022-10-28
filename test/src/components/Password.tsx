type PassProps = {
  pass: number;
}

export function Password (props: PassProps) {
  return (
    <p key={props.pass}>{props.pass}</p>
  )
}
