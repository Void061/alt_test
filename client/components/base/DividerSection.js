export default function DividerSection(props) {
  return (
    props.position == "open" ? 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1057a9" fillOpacity="1" d="M0,320L1440,192L1440,320L0,320Z"></path></svg> :
    ""
    )
}