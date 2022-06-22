export default function DescWithTitle(props) {
  return (
    <div className="container mx-auto my-10 text-center">
      <h5 className="mb-3 uppercase">{props.titoletto}</h5>
      <p>{props.titolo}</p>
    </div>
  )
}