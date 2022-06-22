import Icon from "./Icon";
export default function IconAndText(props) {
 
 return (
  <div className="duration-200 hover:bg-[#1057a9] p-5 icon-and-text hover:text-white">
   <div className="container mx-auto py-10 flex flex-col items-center content-center justify-center text-center">
    <div className="pb-5"><Icon name={props.icon} css_class={props.css_class} /></div>
    <h5 className="uppercase pb-2">{props.titolo}</h5>
    <p>{props.sottotitolo}</p>
   </div>
  </div>
 );
}
