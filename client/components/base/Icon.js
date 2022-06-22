export default function Icon(props) {
  return props.name == "development" ? (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.css} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
  ) : props.name == "events" ? (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.css} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
  ) : props.name == "light" ? (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.css} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
  </svg>
  ) : props.name == "insights" ? (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.css} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>
  ) : props.name == "arrow-right" ? (
<svg xmlns="http://www.w3.org/2000/svg" className={props.css} fill="none" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
</svg>
  ) :
   props.name == "calendar" ? (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.css} fill="none" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
      ) :
      props.name == "user" ? (
        <svg xmlns="http://www.w3.org/2000/svg" className={props.css} fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
         ) :(
   "" )
}