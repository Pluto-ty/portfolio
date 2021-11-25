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
            document.querySelector("#js-box").scrollBy(-245 * maxProjects, 0);
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
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
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
                  Olá, eu sou <span className='c-name'>Thyago Araujo,</span>
                </span>
                <h1 className='c-title'>DESENVOLVEDOR FRONT-END</h1>
                <p>
                  A procura de uma oportunidade na área de desenvolvimento -
                  HTML, CSS, Javascript e React.
                </p>
                <button className='c-projects-button'>
                  <a href='#projetos'>PROJETOS</a>
                </button>
              </div>
              <div className='c-skills-container'>
                <div className='c-skills'>
                  <h2>Habilidades:</h2>
                  <div>
                    <svg className='js' viewBox='0 0 128 128'>
                      <path
                        fill='#F0DB4F'
                        d='M1.408 1.408h125.184v125.185H1.408z'></path>
                      <path
                        fill='#323330'
                        d='M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z'></path>
                    </svg>
                    <svg className='node' viewBox='0 0 128 128'>
                      <path
                        fill='#83CD29'
                        d='M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z'></path>
                    </svg>
                    <svg className='jquery' viewBox='0 0 128 128'>
                      <path
                        fill='#0868AC'
                        d='M9.625 32.181C-1.404 48.032-.031 68.657 8.394 85.501c.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52a75.27 75.27 0 001.586 1.812l.033.033.061.068a80.44 80.44 0 001.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184a66.92 66.92 0 002.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185a72.498 72.498 0 01-2.352-.765l-.323-.117a72.245 72.245 0 01-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198a92.857 92.857 0 01-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51a58.591 58.591 0 01-1.751-.982l-.591-.33a81.221 81.221 0 01-2.28-1.397l-.615-.41a59.283 59.283 0 01-1.623-1.079l-.522-.367a89.287 89.287 0 01-1.534-1.109l-.679-.514a64.473 64.473 0 01-1.384-1.082l-.617-.495a82.693 82.693 0 01-1.724-1.453l-.189-.159a83.466 83.466 0 01-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509a70.541 70.541 0 01-1.598-1.69l-.079-.084a67.39 67.39 0 01-1.621-1.844l-.424-.504a70.602 70.602 0 01-1.167-1.442l-.427-.532a78.406 78.406 0 01-1.347-1.794c-12.15-16.574-16.516-39.432-6.805-58.204m25.629-2.434c-7.977 11.478-7.543 26.844-1.321 38.983a50.581 50.581 0 003.528 5.889c1.195 1.713 2.52 3.751 4.106 5.127a48.111 48.111 0 001.79 1.858l.472.465a51.69 51.69 0 001.828 1.698l.074.064.018.018a55.268 55.268 0 002.135 1.767l.485.378a54.08 54.08 0 002.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635a50.376 50.376 0 01-2.333-.674l-.701-.227a45.423 45.423 0 01-1.631-.562l-.736-.274a56.418 56.418 0 01-1.756-.708l-.473-.2a47.728 47.728 0 01-2.148-.999c-.363-.177-.72-.364-1.078-.548l-.622-.32a44.502 44.502 0 01-1.363-.77l-.326-.185a47.844 47.844 0 01-1.651-1.008l-.498-.332a61.759 61.759 0 01-1.069-.707 57.456 57.456 0 01-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84m22.278-.775c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832a33.242 33.242 0 01-3.201-1.329 33.215 33.215 0 01-5.612-3.424c-9.969-7.565-16.162-21.994-9.657-33.745'></path>
                    </svg>
                    <svg className='firebase' viewBox='0 0 128 128'>
                      <path
                        fill='#f58220'
                        d='M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z'></path>
                    </svg>
                  </div>
                  <div>
                    <svg viewBox='0 0 128 128'>
                      <g fill='#11479e'>
                        <circle cx='64' cy='64' r='11.4'></circle>
                        <path d='M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z'></path>
                      </g>
                    </svg>
                    <svg className='react' viewBox='0 0 128 128'>
                      <g fill='#61DAFB'>
                        <circle cx='64' cy='64' r='11.4'></circle>
                        <path d='M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z'></path>
                      </g>
                    </svg>

                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' />
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' />
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
              <div className='c-project '>
                <img
                  className='c-project-img'
                  src='./images/projects/letmeask.gif'
                  alt=''
                />
                <div className='c-project_content'>
                  <div>
                    <h3>Letmeask</h3>
                    <p>
                      Letmeask é uma aplicação para tirar dúvidas em que o
                      usuário precisa logar com o google para mandar as suas
                      dúvidas e o administrador em uma aula online ou stream
                      responde, podendo marcar as respostas sendo responsidas no
                      momento, marcar como respondida ou apagar. Utilizando
                      react, typescript e firebase.
                    </p>
                  </div>
                  <div className='c-buttons'>
                    <a target='_blank' href='https://letmeask-2c222.web.app'>
                      <button className='btn-site'>SITE</button>
                    </a>
                    <a
                      target='_blank'
                      href='https://github.com/ThyagoAraujoM/letmeask'>
                      <button className='btn-git'>GITHUB</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='c-project bg-2'>
                <img
                  className='c-project-img'
                  src='./images/projects/move-it.gif'
                  alt=''
                />
                <div className='c-project_content'>
                  <div>
                    <h3>Move it</h3>
                    <p>
                      O move.it é um app que une a técnica de Pomodoro com a
                      realização de exercícios físicos para quem passa muito
                      tempo na frente do computador. Contando com um sistema de
                      armazenamento local para caso o usuário não queria logar,
                      e um armazenamento na nuvem com firebase, utilizando a
                      autenticação com o google. Criado com React, Firebase,
                      TypeScript, Material-UI.
                    </p>
                  </div>
                  <div className='c-buttons'>
                    <a
                      target='_blank'
                      href='https://move-it-three-omega.vercel.app'>
                      <button target='_blank' className='btn-site'>
                        SITE
                      </button>
                    </a>
                    <a
                      target='_blank'
                      href='https://github.com/ThyagoAraujoM/move-it'>
                      <button target='_blank' className='btn-git'>
                        GITHUB
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='c-project'>
                <img
                  className='c-project-img'
                  src='./images/projects/Next-Level-Week-Heat.gif'
                  alt=''
                />
                <div className='c-project_content'>
                  <div>
                    <h3>Next Level Week Heat</h3>
                    <p>
                      Uma aplicação de login e autenticação com github para o
                      envio e recebimento de mensagem em tempo real. Utilizando
                      React, Typescript, Sass, Axios e Socket IO para o
                      Front-End, Prisma, Express e JWT no Back-End, React
                      Native, Expo e Moti no mobile.
                    </p>
                  </div>
                  <div className='c-buttons'>
                    <a
                      target='_blank'
                      href='https://github.com/ThyagoAraujoM/Next-Level-Week-Heat'>
                      <button target='_blank' className='btn-git'>
                        GITHUB
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Divisão */}
              <div className='c-project'>
                <img
                  className='c-project-img'
                  src='./images/projects/e-diarista.gif'
                  alt=''
                />
                <div className='c-project_content'>
                  <div>
                    <h3>E-diaristas</h3>
                    <p>
                      E-diaristas é um projeto simples com react e react native
                      com uma página que consume uma api e depois renderiza na
                      tela os dados recebidos. O uso da aplicação é para
                      procurar diaristas disponíveis na região.
                    </p>
                  </div>
                  <div className='c-buttons'>
                    <a
                      target='_blank'
                      href='https://github.com/ThyagoAraujoM/E-diaristas'>
                      <button className='btn-git'>GITHUB</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className='c-project bg-2'>
                <img
                  className='c-project-img'
                  src='./images/projects/devfinance.png'
                  alt=''
                />
                <div className='c-project_content'>
                  <div>
                    <h3>Dev$finance</h3>
                    <p>
                      Dev$finance é um projeto feito durante uma maratona da
                      Rocketseat, utilizando Html, Css e Javascript e sua função
                      é ajudar na organização de gastos mensais, tudo utilizando
                      LocalStorage para não perder os dados.
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
              <div className='c-project '>
                <img
                  className='c-project-img'
                  src='./images/projects/quiz.gif'
                  alt=''
                />
                <div className='c-project_content'>
                  <div>
                    <h3>Quiz</h3>
                    <p>
                      Um aplicação onde o usuário decide quantas perguntas
                      deseja responder, de temas e dificuldades aleatórias, após
                      responder o usuário pode ver o resultado e decidir de
                      salvar o questionário para se quiser rever o resultado
                      outra hora. Utilizando React, TypeScript, Formik, Axios e
                      Material-UI para a construção da aplicação.
                    </p>
                  </div>
                  <div className='c-buttons'>
                    <a target='_blank' href='https://quiz-ty.vercel.app'>
                      <button className='btn-site'>SITE</button>
                    </a>
                    <a
                      target='_blank'
                      href='https://github.com/ThyagoAraujoM/Quiz'>
                      <button className='btn-git'>GITHUB</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className='c-about-container'>
            <div className='c-about'>
              <img className='c-details-1' src='./images/details.svg' alt='' />
              <div className='c-about-content'>
                <h2>SOBRE MIM</h2>
                <p>
                  Sou um programador em busca de uma oportunidade para entrar no
                  mercado. Já tenho experiência na criação de sites responsivos
                  e estou sempre buscando aprender novas ferramentas para
                  melhorar o meu trabalho, com 40+ horas em cursos e 100+ horas
                  em prática. Atualmente estou focando meus estudos em criação
                  de aplicações com React, Typescript e Node.
                </p>
                <p>
                  Você pode encontrar mais sobre meus projetos e minha rotina de
                  estudos em minha conta no &nbsp;
                  <a target='_blank' href='https://github.com/ThyagoAraujoM'>
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
              <img className='c-details-2' src='./images/details.svg' alt='' />
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
