import Icon from "./Icon";

export default function NewsCard(props) {
    return (
        <div className="duration-200 p-5">
            <div className="container mx-auto py-10 flex flex-col items-start content-center justify-center ">
                <div className="pb-5 relative w-full">
                    <img className="rounded-[50px] object-cover max-h-[350px] w-full" alt="" src={`${process.env.BASE_URL}${props.img.data[0].attributes.formats.medium.url}`} />
                </div>
                <div className="publication-date flex items-center content-center text-[#0cf]">
                    <Icon name="calendar" css="h-5 w-5 stroke-[#0cf] stroke-[2px] mr-[5px]" /> {new Date(props.data).toLocaleDateString("it-IT")}
                </div>
                <h4 className="mt-2 pb-2">
                    {props.titolo}
                </h4>
                <p className="mb-3">
                    {props.sottotitolo}
                </p>
                <div className="author">
                  <img src="https://media-exp2.licdn.com/dms/image/C4D03AQGUjvJEgZ8hQA/profile-displayphoto-shrink_200_200/0/1612909250179?e=1659571200&v=beta&t=6BfdxgOhQRxl0TlqieUZvWTJjqPh3MMpQZFt89jogqc" className="w-[50px] h-[50px] object-cover rounded-full inline-flex mr-2" />
                by  {props.autore}
                </div>
            </div>
        </div>
    );
}
