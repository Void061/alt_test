export default function TitleAndSubtitle(props) {
    return (
        <div>
            <h1 className="text-center mb-5 text-[50px] md:text-[70px]">
                {props.titolo_normal}
                <span className="light-blue"> {props.titolo_light}</span>
            </h1>
            <div className="container max-w-[650px] mb-10 mx-auto">
                <p className="text-center" dangerouslySetInnerHTML={{ __html: props.sottotitolo}}>
                </p>
            </div>
        </div>
    )
}