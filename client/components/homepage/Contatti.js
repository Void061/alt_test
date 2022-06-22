import { useForm } from "react-hook-form";
export default function Contatti(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration =
    (data) => {
      const formdata = {
        "from": "info@altera.consulting",
        "to": "info@altera.consulting",
        "subject": data.oggetto,
        "text": "test email"
      };
      fetch('https://altera.consulting/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', "Authorization": "bearer b0ecaf7cc56a8c8f6b2ef9b7bde9211d9b74e1c1bdea9c75677f3aa8578a3c49e90fd7a0b1db3c0f33fdd7171d9df3245965d29dbfe8a0d2133e5bb85da31adc4ef3b3ce130bcb855ee3d187d780110025c1ebd54d3c9926776360ae63757330e57a64e845545c39a4072e3e2bdb04ee650fe3c17910c7c016e7ca3c5ccc25f4"
        },
        body: JSON.stringify(formdata),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

  const handleError = (errors) => { };

  const registerOptions = {
    nome: {
      required: "Campo obbligatorio"
    },
    cognome: {
      required: "Campo obbligatorio"
    },
    email: {
      required: {
        value: true,
        message: "Inserisci un'email valida"
      },
      pattern: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Email non valida"
      },
    },
  };

  return (
    <div id="contact" className={`${props.css}`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-14 py-[150px] md:pt-[250px] md:pb-[100px]">
        <div className="col-span-1 md:col-span-2 h-full flex items-center">
          <div className="container"><h5 className="light-blue font-medium pb-3 h-full">Professionisti al tuo servizio</h5>
            <h2 className="pb-3 text-white text-[40px] md:text-[50px]">Vuoi parlarci <br /> di un <span className="light-blue">progetto</span>?</h2>
            <p className="pb-3 text-white">Che tu voglia ripensare la tua impresa o avviarne una nuova, compila i dati qui di fianco ed entra in contatto con noi! <br /> <br />Saremo lieti di collaborare e trasformare insieme la tua idea in realtà!
            </p>
            <div>

            </div></div>
        </div>
        <div className="col-span-1 md:col-span-3 h-full">
          <div className="rounded-[50px] bg-white py-[70px] px-[40px] md:px-[80px] shadow-xl h-full"><h3 className="pb-5">Contatti</h3>
            <form className="w-full" onSubmit={handleSubmit(handleRegistration, handleError)}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Nome
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" {...register('nome', registerOptions.nome)} />
                  <p className="text-red-500 text-xs italic">{errors?.nome && errors.nome.message}</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Cognome
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-[10px] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"  {...register('cognome', registerOptions.cognome)} />
                  <p className="text-red-500 text-xs italic">{errors?.cognome && errors.cognome.message}</p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" {...register('email', registerOptions.email)} />
                  <p className="text-red-500 text-xs italic">{errors?.email && errors.email.message}</p>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Oggetto
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-[10px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  {...register('oggetto', { required: false })}>
                      <option>Informazioni</option>
                      <option>Altro</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"  >
                    Messaggio
                  </label>
                  <div className="relative">
                    <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" {...register('messaggio')}>
                    </textarea>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-3 mt-5">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <div className="relative">
                    <input type="submit" className="button btn-dark w-full" value="Invia messaggio" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}