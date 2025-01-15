import tailwindConfigImage from "../assets/taildwindconfig.png";
import homepage from "../assets/homepage.png";

export default function Documentacion() {
    return (
        <div className="mt-10 pt-5">
            <div className="mt-1">
                <section className="p-10 bg-slate-300">
                    <h1 className="text-center font-sans text-lg text-black font-bold">¿Qué es "DB Biblioteca Digital"?</h1>

                    <div className="m-7">
                        <p className="mt-6 italic">
                            "DB Biblioteca Digital" es un software desarrollado por estudiantes de preparatoria mexicanos con el propósito
                            de mantener un inventario virtual y organizado de los libros disponibles en una biblioteca escolar. Además, permite
                            gestionar editoriales, categorías y autores disponibles, facilitando a los alumnos una búsqueda más rápida y eficiente
                            de los libros de su interés.
                        </p>

                        <p className="mt-6">
                            Para el desarrollo de este sistema utilizamos el meta lenguaje de programación "React JS" junto con
                            bibliotecas como Tailwind CSS para el diseño del Frontend. A continuación, ofrecemos una explicación más
                            detallada.
                        </p>

                        <p className="mt-6">
                            React te permite crear interfaces de usuario a partir de piezas individuales llamadas componentes. Crea tus propios
                            componentes de React como , luego, combínalos en pantallas, páginas y aplicaciones completas.
                        </p>
                    </div>
                </section>

                <h1 className="text-center font-sans text-lg text-black font-bold mt-6">¿Cuál es el framework de diseño CSS que decidimos implementar? ¿Por qué?</h1>
                <h3 className="text-center text-lg text-orange-600 font-mono font-semibold italic">¿Qué es Tailwind?</h3>

                <div className="m-7">
                    <p className="mt-6 ml-5">
                        Tailwind es una biblioteca CSS que facilita la creación de interfaces modernas y altamente personalizables. Tailwind elimina automáticamente
                        todos los CSS no utilizados al compilar para producción, lo que significa que el paquete de CSS final es el más pequeño posible. De hecho,
                        la mayoría de los proyectos de Tailwind envían menos de 10 kB de CSS al cliente.
                    </p>
                    <div className="flex">
                        <p className="mt-5 text-wrap">
                            Decidimos implementar esta biblioteca para optimizar el desarrollo del Frontend y
                            dedicar más tiempo a garantizar una buena comunicación cliente-servidor. Además, permite crear un
                            diseño más atractivo y funcional, ya que Tailwind es altamente configurable mediante el archivo
                            tailwind.config.js, donde es posible definir colores, tamaños, espaciados y fuentes personalizadas.

                            <p className="mt-9 text-wrap">
                                A diferencia de otros frameworks como Bootstrap, Tailwind no impone estilos predefinidos para botones, formularios o tarjetas.
                                Esto elimina la necesidad de sobrescribir estilos, facilitando la personalización del diseño y logrando
                                interfaces más intuitivas, flexibles y fáciles de utilizar.
                            </p>

                            <p className="mt-9 text-wrap">
                                Tailwind nos permitió implementar gradientes de colores, menús desplegables y diseños responsivos. Esto garantiza
                                que nuestra aplicación sea compatible con diferentes dispositivos, independientemente del tamaño de pantalla. Por ejemplo, ofrece
                                un botón tipo "Hamburguesa" para desplegar un menú lateral en pantallas pequeñas. En pantallas más grandes, como las de computadoras
                                de escritorio o portátiles, muestra una barra de navegación fija en la parte superior que ocupa todo el ancho de la página.
                            </p>
                        </p>
                        <img
                            src={tailwindConfigImage}
                            alt="Configuración de Tailwind"
                            className="m-5 size-80 w-auto rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
                <img
                    src={homepage}
                    alt="Página de Inicio"
                    className="mx-auto shadow-2xl mb-10"
                />

                <section className="p-10 bg-slate-300 mt-10 mb-10">
                    <h1 className="text-center font-sans text-lg text-black font-bold">Desarrollo Backend</h1>

                    <div className="flex">
                        <div className="m-7 size-1/3">
                            <h3 className="ml-5 text-lg text-lime-600 font-semibold italic">¿Qué Softwares implementamos en el desarrollo de este sistema?</h3>
                            <ul className="list-disc mt-5 ml-4 text-right underline">
                                <li>Node js</li>
                                <li>CORS</li>
                                <li>Dotenv</li>
                                <li>express</li>
                                <li>Mysql2</li>
                                <li>nodemon</li>
                                <li>zod</li>
                            </ul>
                        </div>

                        <div className="m-7 size-2/3 text-right">
                            <h3 className="ml-5 text-lg text-lime-600 font-semibold italic">¿Por qué necesitamos implementar bibliotecas para el desarrollo Backend?</h3>
                            <p className="mt-6">
                                React es un meta lenguaje de desarrollo frontend basado en Java Script especializado en crear interfacez de usuario
                                que trabaja del lado del cliente y no tiene la capacidad de interactuar por si mismo con el servidor, por este
                                motivo se necesitan lenguajes y Softwares externos a este.
                            </p>

                            <p className="mt-6">
                                En resúmen, estas tecnogolías nos ayudan a tener una comunicación cliente-servidor adecuada enpaquetando
                                y enviando datos virtualmente interactuando con una base de datos.
                            </p>
                        </div>
                    </div>
                </section>

                <h1 className="text-center font-sans text-lg text-black font-bold">Tecnologías Backend</h1>

                <div>
                    <div className="flex m-7">
                        <div className="size-1/3 m-7">
                            <h3 className="text-center text-lg font-semibold italic text-blue-900 underline">Node JS</h3>
                            <p className="mt-6">
                                Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello)
                                basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el
                                motor V8 de Google. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo,
                                servidores web.
                            </p>

                            <p className="mt-6">
                                Decidimos utilizar Node Js por la alta escalabilidad y maniobrabilidad en aplicaciones robustas y por el gran
                                historial y reseñas que tiene en aplicaciones en tiempo real.
                            </p>
                        </div>
                        <div className="size-1/3 m-7">
                            <h3 className="text-center text-lg font-semibold italic text-blue-900 underline">CORS</h3>
                            <p className="mt-6">
                                El intercambio de recursos de origen cruzado (CORS, por sus siglas en inglés), es un mecanismo basado en cabeceras HTTP que permite a
                                un servidor indicar cualquier dominio, esquema o puerto con un origen distinto del suyo desde el que un navegador debería permitir la
                                carga de recursos.
                            </p>
                            <p className="mt-6">
                                CORS nos fue de gran ayuda para asegurar que las peticiones que van desde el API hacia el servidor no se realicen
                                hasta que el navegador compruebe que dichas peticiones sean confiables.
                            </p>
                        </div>

                        <div className="size-1/3 m-7">
                            <h3 className="text-center text-lg font-semibold italic text-blue-900 underline">Dotenv</h3>
                            <p className="mt-6">
                                Dotenv es un módulo de dependencia cero que carga las variables de entorno desde un archivo .env en process.env. El almacenamiento de la
                                configuración del entorno separado del código está basado en la metodología The Twelve-Factor App.
                            </p>
                        </div>
                    </div>

                    <section className="p-10 bg-slate-300 mt-10 mb-10">
                        <div className="flex">
                            <div className="size-1/3 m-7">
                                <h3 className="text-center text-lg font-semibold italic text-blue-900 underline">express</h3>
                                <p className="mt-6">
                                    Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características 
                                    para las aplicaciones web y móviles, con miles de métodos de programa de utilidad HTTP y middleware a su disposición, la 
                                    creación de una API sólida es rápida y sencilla, Express proporciona una delgada capa de características de aplicación web 
                                    básicas, que no ocultan las características de Node.js que tanto ama y conoce.
                                </p>
                            </div>

                            <div className="size-1/3 m-7">
                                <h3 className="text-center text-lg font-semibold italic text-blue-900 underline">MYSQL</h3>
                                <p className="mt-6">
                                    MySQL es la base de datos de código abierto más popular del mercado. Según DB-Engines, MySQL se clasifica como la segunda 
                                    base de datos más popular, detrás de Oracle Database. MySQL potencia muchas de las aplicaciones más accesibles, 
                                    como Facebook, Twitter, Netflix, Uber, Airbnb, Shopify y Booking.com.
                                </p>
                            </div>

                            <div className="size-1/3 m-7">
                                <h3 className="text-center text-lg font-semibold italic text-blue-900 underline">nodemon</h3>
                                <p className="mt-6">
                                    Nodemon supervisa los archivos de tu proyecto y aplica las actualizaciones instantaneas reiniciando tu 
                                    aplicación eliminando los tediosos reinicios manuales acelerando notablemente el desarrollo
                                    de esta web.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="m-8 justify-center size-1/3">
                        <h3 className="text-center text-lg font-semibold italic text-blue-900 underline">ZOD</h3>
                        <p className="mt-6">
                            Zod es una biblioteca de declaración y validación de esquemas que utiliza TypeScript como base. Utilizo el término "esquema" 
                            para referirme en términos generales a cualquier tipo de datos, desde un stringobjeto anidado simple hasta uno complejo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
