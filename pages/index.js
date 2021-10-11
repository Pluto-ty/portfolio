import { useEffect } from "react";
import Head from "next/head";
let notMobile = true;
let currentProject = 0;
let maxProjects;
let mouseenter = false;
let project;
let lastContainer = 0;
function Home() {
   useEffect(() => {
      project = document.querySelectorAll(".c-project");
      maxProjects = Number(document.querySelectorAll(".c-project").length - 1);
      for (let i of project) {
         i.addEventListener("mouseenter", () => {
            mouseEnter();
         });

         i.addEventListener("mouseout", () => {
            mouseOut();
         });
      }

      setInterval(() => {
         if (!mouseenter) {
            if (window.innerWidth < 768) {
               if (currentProject >= maxProjects) {
                  currentProject = 0;
                  document
                     .querySelector("#js-box")
                     .scrollBy(-245 * maxProjects, 0);
               } else {
                  document.querySelector("#js-box").scrollBy(245, 0);
                  currentProject++;
               }
               notMobile = false;
            } else if (!notMobile) {
               document.querySelector("#js-box").scrollBy(-900, 0);
               notMobile = true;
            }
         }
      }, 4000);
   }, []);

   return (
      <div>
         <Head>
            <meta charset='UTF-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1.0'
            />
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link
               rel='preconnect'
               href='https://fonts.gstatic.com'
               crossorigin
            />
            <link
               href='https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat&display=swap'
               rel='stylesheet'
            />
            <link rel='icon' href='/images/Logo.svg' />
            <title>Thyago Araujo Portfólio</title>
         </Head>
         <body>
            <div className='c-container-geral'>
               <div className='c-container'>
                  <img
                     className='c-computer-image'
                     src='./images/computador.svg'
                     alt=''
                  />
                  <div className='c-container-content'>
                     <img className='c-logo' src='./images/Logo.svg' alt='' />
                     <div className='c-introduction'>
                        <span>
                           Olá, eu sou{" "}
                           <span className='c-name'>Thyago Araujo,</span>
                        </span>
                        <h1 className='c-title'>DESENVOLVEDOR FRONT-END</h1>
                        <p>
                           A procura de uma oportunidade na área de
                           desenvolvimento - HTML, CSS, Javascript e React.
                        </p>
                        <button className='c-projects-button'>
                           <a href='#projetos'>PROJETOS</a>
                        </button>
                     </div>
                     <div className='c-skills-container'>
                        <div className='c-skills'>
                           <h2>Habilidades:</h2>
                           <div>
                              <svg className='html5' viewBox='0 0 128 128'>
                                 <path
                                    fill='#E44D26'
                                    d='M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z'></path>
                                 <path
                                    fill='#F16529'
                                    d='M64 116.8l36.378-10.086 8.559-95.878H64z'></path>
                                 <path
                                    fill='#EBEBEB'
                                    d='M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z'></path>
                                 <path
                                    fill='#fff'
                                    d='M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z'></path>
                              </svg>
                              <svg className='css' viewBox='0 0 128 128'>
                                 <path
                                    fill='#1572B6'
                                    d='M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z'></path>
                                 <path
                                    fill='#33A9DC'
                                    d='M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z'></path>
                                 <path
                                    fill='#fff'
                                    d='M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z'></path>
                                 <path
                                    fill='#EBEBEB'
                                    d='M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z'></path>
                                 <path
                                    fill='#fff'
                                    d='M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z'></path>
                                 <path
                                    fill='#EBEBEB'
                                    d='M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z'></path>
                              </svg>
                              <svg className='js' viewBox='0 0 128 128'>
                                 <path
                                    fill='#F0DB4F'
                                    d='M1.408 1.408h125.184v125.185H1.408z'></path>
                                 <path
                                    fill='#323330'
                                    d='M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z'></path>
                              </svg>
                              <svg className='bootstrap' viewBox='0 0 128 128'>
                                 <path
                                    fill='#5B4282'
                                    d='M9.531 112.586h4.161c1.896 0 3.273.27 4.129.81.857.54 1.285 1.398 1.285 2.575 0 .799-.188 1.454-.563 1.966s-.874.82-1.496.924v.091c.848.189 1.459.543 1.834 1.061s.563 1.207.563 2.067c0 1.22-.44 2.171-1.322 2.854-.881.683-2.078 1.024-3.59 1.024H9.531v-13.372zm2.835 5.296h1.646c.768 0 1.325-.119 1.669-.356.345-.238.517-.631.517-1.18 0-.512-.187-.879-.562-1.102s-.968-.334-1.779-.334h-1.491v2.972zm0 2.25v3.485h1.848c.78 0 1.356-.149 1.729-.448s.558-.756.558-1.372c0-1.109-.793-1.665-2.378-1.665h-1.757zm21.886-.878c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.087 1.183 1.631 2.885 1.631 5.104zm-9.758 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zm24.667 0c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.086 1.183 1.631 2.885 1.631 5.104zm-9.759 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zm17.688 6.704h-2.835v-11.012h-3.631v-2.36h10.097v2.36H57.09v11.012zm13.581-3.713c0 1.208-.434 2.159-1.303 2.854-.869.695-2.078 1.043-3.626 1.043-1.427 0-2.689-.269-3.786-.805v-2.634c.902.402 1.666.686 2.291.851s1.196.247 1.715.247c.622 0 1.099-.119 1.431-.356.333-.238.499-.591.499-1.061 0-.262-.073-.495-.219-.7-.146-.204-.361-.401-.645-.59s-.861-.491-1.733-.905c-.817-.384-1.43-.753-1.838-1.107a4.158 4.158 0 01-.979-1.234c-.244-.47-.366-1.019-.366-1.646 0-1.183.401-2.113 1.203-2.79s1.91-1.015 3.325-1.015c.695 0 1.358.082 1.989.247.631.165 1.291.396 1.98.695l-.915 2.204c-.713-.292-1.303-.497-1.77-.613a5.69 5.69 0 00-1.376-.174c-.537 0-.948.125-1.235.375-.287.25-.43.576-.43.979 0 .25.058.468.174.654.116.186.3.366.553.54.253.174.852.486 1.797.938 1.25.598 2.107 1.197 2.57 1.797s.694 1.334.694 2.206zm7.583 3.713h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zm8.524-5.131v5.131h-2.835v-13.372h3.896c1.817 0 3.161.331 4.033.992.872.662 1.308 1.667 1.308 3.014 0 .787-.216 1.486-.649 2.099s-1.046 1.093-1.838 1.44c2.012 3.006 3.323 4.948 3.933 5.826H91.48l-3.192-5.131h-1.51zm0-2.305h.915c.896 0 1.558-.149 1.985-.448s.64-.769.64-1.409c0-.634-.218-1.085-.654-1.354-.436-.268-1.111-.402-2.026-.402h-.86v3.613zm17.716 7.436l-.97-3.183h-4.875l-.97 3.183h-3.055l4.719-13.426h3.466l4.738 13.426h-3.053zm-1.647-5.561a1027.84 1027.84 0 01-1.514-4.893 13.862 13.862 0 01-.242-.896c-.201.78-.777 2.71-1.729 5.789h3.485zm15.622-3.64c0 1.439-.45 2.54-1.349 3.301-.899.763-2.178 1.144-3.837 1.144h-1.216v4.756h-2.835v-13.372h4.271c1.622 0 2.855.349 3.7 1.047.844.699 1.266 1.74 1.266 3.124zm-6.402 2.122H113c.872 0 1.524-.172 1.957-.517.433-.345.649-.846.649-1.504 0-.665-.182-1.156-.544-1.473-.363-.317-.932-.476-1.706-.476h-1.29v3.97zm-38.116-62.12c-1.983-.653-4.838-.759-8.565-.759H52v20h14.424c2.502 0 4.259-.249 5.271-.437 1.783-.318 3.274-.93 4.472-1.676 1.198-.744 2.183-1.869 2.955-3.293.771-1.424 1.158-3.087 1.158-4.951 0-2.184-.559-3.98-1.677-5.59-1.117-1.611-2.668-2.642-4.652-3.294zm-2.056-8.612c1.97-.586 3.455-1.646 4.452-3.003.999-1.357 1.498-3.103 1.498-5.154 0-1.943-.466-3.675-1.398-5.154-.932-1.478-2.263-2.481-3.992-3.027-1.732-.544-4.7-.809-8.906-.809H52v18h12.507c3.435 0 5.897-.399 7.388-.853zM117 16.126C117 8.324 110.675 2 102.873 2H25.127C17.325 2 11 8.324 11 16.126v77.748C11 101.676 17.325 108 25.127 108h77.746c7.802 0 14.127-6.324 14.127-14.126V16.126zM86.57 73.27c-1.157 2.356-2.589 4.173-4.292 5.451-1.704 1.277-3.841 2.446-6.41 3.098A38.022 38.022 0 0166.424 83H44V24h22.065c4.473 0 8.059.62 10.761 1.804 2.703 1.185 4.818 3.021 6.351 5.483 1.53 2.463 2.296 5.046 2.296 7.735 0 2.502-.68 4.861-2.036 7.071-1.358 2.21-3.408 3.995-6.15 5.352 3.54 1.038 6.263 2.811 8.166 5.313 1.903 2.503 2.855 5.458 2.855 8.866-.001 2.742-.579 5.291-1.738 7.646z'></path>
                              </svg>
                           </div>
                           <div>
                              <svg className='jquery' viewBox='0 0 128 128'>
                                 <path
                                    fill='#0868AC'
                                    d='M9.625 32.181C-1.404 48.032-.031 68.657 8.394 85.501c.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52a75.27 75.27 0 001.586 1.812l.033.033.061.068a80.44 80.44 0 001.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184a66.92 66.92 0 002.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185a72.498 72.498 0 01-2.352-.765l-.323-.117a72.245 72.245 0 01-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198a92.857 92.857 0 01-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51a58.591 58.591 0 01-1.751-.982l-.591-.33a81.221 81.221 0 01-2.28-1.397l-.615-.41a59.283 59.283 0 01-1.623-1.079l-.522-.367a89.287 89.287 0 01-1.534-1.109l-.679-.514a64.473 64.473 0 01-1.384-1.082l-.617-.495a82.693 82.693 0 01-1.724-1.453l-.189-.159a83.466 83.466 0 01-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509a70.541 70.541 0 01-1.598-1.69l-.079-.084a67.39 67.39 0 01-1.621-1.844l-.424-.504a70.602 70.602 0 01-1.167-1.442l-.427-.532a78.406 78.406 0 01-1.347-1.794c-12.15-16.574-16.516-39.432-6.805-58.204m25.629-2.434c-7.977 11.478-7.543 26.844-1.321 38.983a50.581 50.581 0 003.528 5.889c1.195 1.713 2.52 3.751 4.106 5.127a48.111 48.111 0 001.79 1.858l.472.465a51.69 51.69 0 001.828 1.698l.074.064.018.018a55.268 55.268 0 002.135 1.767l.485.378a54.08 54.08 0 002.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635a50.376 50.376 0 01-2.333-.674l-.701-.227a45.423 45.423 0 01-1.631-.562l-.736-.274a56.418 56.418 0 01-1.756-.708l-.473-.2a47.728 47.728 0 01-2.148-.999c-.363-.177-.72-.364-1.078-.548l-.622-.32a44.502 44.502 0 01-1.363-.77l-.326-.185a47.844 47.844 0 01-1.651-1.008l-.498-.332a61.759 61.759 0 01-1.069-.707 57.456 57.456 0 01-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84m22.278-.775c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832a33.242 33.242 0 01-3.201-1.329 33.215 33.215 0 01-5.612-3.424c-9.969-7.565-16.162-21.994-9.657-33.745'></path>
                              </svg>
                              <svg className='react' viewBox='0 0 128 128'>
                                 <g fill='#61DAFB'>
                                    <circle cx='64' cy='64' r='11.4'></circle>
                                    <path d='M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z'></path>
                                 </g>
                              </svg>
                              <svg className='node' viewBox='0 0 128 128'>
                                 <path
                                    fill='#83CD29'
                                    d='M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z'></path>
                              </svg>
                              <svg className='firebase' viewBox='0 0 128 128'>
                                 <path
                                    fill='#f58220'
                                    d='M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z'></path>
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id='projetos' className='c-projects'>
                  <h2>PROJETOS</h2>
                  <div className='c-next-prev-projects'>
                     <div
                        onClick={nextPrevProjects1}
                        className='c-projects-1 c-group-button-projects active'></div>
                     <div
                        onClick={nextPrevProjects2}
                        className='c-projects-2 c-group-button-projects'></div>
                  </div>
                  <div className='c-box' id='js-box'>
                     <div className='c-project'>
                        <img
                           className='c-project-img'
                           src='./images/projects/devfinance.png'
                           alt=''
                        />
                        <div className='c-project_content'>
                           <div>
                              <h3>Dev$finance</h3>
                              <p>
                                 Dev$finance é um projeto feito durante uma
                                 maratona da Rocketseat, utilizando Html, Css e
                                 Javascript e sua função é ajudar na organização
                                 de gastos mensais, tudo utilizando LocalStorage
                                 para não perder os dados.
                              </p>
                           </div>
                           <div className='c-buttons'>
                              <a
                                 target='_blank'
                                 href='https://thyagoaraujom.github.io/Dev-finance'>
                                 <button target='_blank' className='btn-site'>
                                    SITE
                                 </button>
                              </a>
                              <a
                                 target='_blank'
                                 href='https://github.com/ThyagoAraujoM/Dev-finance'>
                                 <button target='_blank' className='btn-git'>
                                    GITHUB
                                 </button>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className='c-project bg-2'>
                        <img
                           className='c-project-img'
                           src='./images/projects/fancy-border-radius.png'
                           alt=''
                        />
                        <div className='c-project_content'>
                           <div>
                              <h3>Fancy Border Radius</h3>
                              <p>
                                 Fancy Border radius é um projeto baseado em um
                                 dos desafios do repositório App Ideas no
                                 github. Nele temos que criar uma interface que
                                 o usuário possa modificar o border-radius do
                                 elemento a vontade e conseguir copia-lo pronto
                                 para usar no seu projeto.
                              </p>
                           </div>
                           <div className='c-buttons'>
                              <a
                                 target='_blank'
                                 href='https://thyagoaraujom.github.io/Praticando-templates/iniciante/Border-radius-Previewer/index.html'>
                                 <button className='btn-site'>SITE</button>
                              </a>
                              <a
                                 target='_blank'
                                 href='https://github.com/ThyagoAraujoM/Praticando-templates/tree/main/iniciante/Border-radius-Previewer'>
                                 <button className='btn-git'>GITHUB</button>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className='c-project'>
                        <img
                           className='c-project-img'
                           src='./images/projects/faq.png'
                           alt=''
                        />
                        <div className='c-project_content'>
                           <div>
                              <h3>FAQ Template</h3>
                              <p>
                                 Este projeto é um template básico de um FAQ
                                 baseado do site FrontendMentor, dele temos que
                                 recriar o design o mais fielmente possível ao
                                 protótipo recebido e que esteja responsivo para
                                 maioria dos dispositivos.
                              </p>
                           </div>
                           <div className='c-buttons'>
                              <a
                                 target='_blank'
                                 href='https://thyagoaraujom.github.io/Praticando-templates/iniciante/faq-accordion-card-main/index.html'>
                                 <button className='btn-site'>SITE</button>
                              </a>
                              <a
                                 target='_blank'
                                 href='https://github.com/ThyagoAraujoM/Praticando-templates/tree/main/iniciante/faq-accordion-card-main'>
                                 <button className='btn-git'>GITHUB</button>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className='c-project'>
                        <img
                           className='c-project-img'
                           src='./images/projects/spliter.png'
                           alt=''
                        />
                        <div className='c-project_content'>
                           <div>
                              <h3>Splitter</h3>
                              <p>
                                 Slitter é um aplicativo para calculo de
                                 gorjeta, com o calculo em si, uma área para
                                 valores da gorjeta escolhida pelo usuário e um
                                 botão para zerar tudo, outro projeto baseado do
                                 site FrontendMentor.
                              </p>
                           </div>
                           <div className='c-buttons'>
                              <a
                                 target='_blank'
                                 href='https://thyagoaraujom.github.io/Praticando-templates/iniciante/tip-calculator-app-main/index.html'>
                                 <button className='btn-site'>SITE</button>
                              </a>
                              <a
                                 target='_blank'
                                 href='https://github.com/ThyagoAraujoM/Praticando-templates/tree/main/iniciante/tip-calculator-app-main'>
                                 <button className='btn-git'>GITHUB</button>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className='c-project bg-2'>
                        <img
                           className='c-project-img'
                           src='./images/projects/wildbeast.png'
                           alt=''
                        />
                        <div className='c-project_content'>
                           <div>
                              <h3>Wildbeast</h3>
                              <p>
                                 Wildbeast é um template feito para a prática de
                                 grid layout, utilizando todos os seus conceitos
                                 para criar um layout responsivo para todos os
                                 tipos de dispositivos.
                              </p>
                           </div>
                           <div className='c-buttons'>
                              <a
                                 target='_blank'
                                 href='https://thyagoaraujom.github.io/Wildbeast/'>
                                 <button className='btn-site'>SITE</button>
                              </a>
                              <a
                                 target='_blank'
                                 href='https://github.com/ThyagoAraujoM/Wildbeast'>
                                 <button className='btn-git'>GITHUB</button>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className='c-project'>
                        <img
                           className='c-project-img'
                           src='./images/project1.jpg'
                           alt=''
                        />
                        <div className='c-project_content'>
                           <div>
                              <h3>FlexBox</h3>
                              <p>
                                 Flexbox é um template feito para trinar flexbox
                                 como o próprio nome diz, feito com todos os
                                 seus princípios de flexibilidade para criar um
                                 layout responsivo para todos os tipos de
                                 dispositivos.
                              </p>
                           </div>
                           <div className='c-buttons'>
                              <a
                                 target='_blank'
                                 href='https://thyagoaraujom.github.io/FlexBlog/'>
                                 <button className='btn-site'>SITE</button>
                              </a>
                              <a
                                 target='_blank'
                                 href='https://github.com/ThyagoAraujoM/FlexBlog'>
                                 <button className='btn-git'>GITHUB</button>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <footer className='c-about-container'>
                  <div className='c-about'>
                     <img
                        className='c-details-1'
                        src='./images/details.svg'
                        alt=''
                     />
                     <div className='c-about-content'>
                        <h2>SOBRE MIM</h2>
                        <p>
                           Sou um programador em busca de uma oportunidade para
                           entrar no mercado. Já tenho experiência na criação de
                           sites responsivos e estou sempre buscando aprender
                           novas ferramentas para melhorar o meu trabalho, com
                           40+ horas em cursos e 100+ horas em prática.
                           Atualmente estou focando meus estudos em back-ending
                           com Node e React.
                        </p>
                        <p>
                           Você pode encontrar mais sobre meus projetos e minha
                           rotina de estudos em minha conta no &nbsp;
                           <a
                              target='_blank'
                              href='https://github.com/ThyagoAraujoM'>
                              Github
                           </a>
                           .
                        </p>
                        <a href='./assets/CV.pdf' download>
                           <button>CURRÍCULO</button>
                        </a>

                        <p className='c-email'>
                           thyagoaraujomotta@gmail.com
                           <a onClick={copyText}>
                              <img src='./images/copy-icon.svg' />
                              <span className='c-copy'>e-mail copiado</span>
                           </a>
                        </p>
                        <p>
                           (27) 9 9975-5684
                           <a
                              href='https://api.whatsapp.com/send?phone=5527999755684'
                              target='_blank'>
                              <img src='./images/whats-icon.svg' alt='' />
                           </a>
                        </p>
                     </div>
                     <img
                        className='c-details-2'
                        src='./images/details.svg'
                        alt=''
                     />
                  </div>
               </footer>
            </div>
         </body>
      </div>
   );
}

function copyText() {
   let text = "thyagoaraujomotta@gmail.com";
   navigator.clipboard.writeText(text);
   document.querySelector(".c-copy").style.display = "inline-block";

   setTimeout(() => {
      document.querySelector(".c-copy").style.display = "none";
   }, 1000);
}

function mouseEnter() {
   mouseenter = true;
}

function mouseOut() {
   mouseenter = false;
}

function nextPrevProjects1() {
   nextPrevProjects(1);
}

function nextPrevProjects2() {
   nextPrevProjects(2);
}

function nextPrevProjects(project) {
   document.querySelectorAll(".c-group-button-projects").forEach((i) => {
      i.classList.remove("active");
   });
   document.querySelectorAll(".c-group-projects").forEach((i) => {
      i.classList.remove("active");
   });
   if (lastContainer < project) {
      document
         .querySelector("#js-box")
         .scrollBy(900 * (project - lastContainer), 0);
   } else {
      document
         .querySelector("#js-box")
         .scrollBy(900 * (project - lastContainer), 0);
   }
   lastContainer = project;

   if (project == 1) {
      document.querySelector(".c-projects-1").classList.add("active");
   } else if (project == 2) {
      document.querySelector(".c-projects-2").classList.add("active");
   }
}

export default Home;
