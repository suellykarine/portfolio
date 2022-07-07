import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { FcCellPhone } from "react-icons/fc";
import "./style-novo.css";
import Cards from "../componentes/Cards";

const LandingPageNovo = () => {
  return (
    <div>
      <nav class="container">
        <a class="logo" href="#">
          Suélly<span>Dev</span>.
        </a>

        <div class="menu">
          <ul class="grid">
            <li>
              <a class="title" href="#home">
                Início
              </a>
            </li>
            <li>
              <a class="title" href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a class="title" href="#tec">
                Tecnologias
              </a>
            </li>
            <li>
              <a class="title" href="#projetos">
                Projetos
              </a>
            </li>
            <li>
              <a class="title" href="#qualificacao">
                Qualificação
              </a>
            </li>

            <li>
              <a class="title" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div class="toggle icon-menu"></div>
        <div class="toggle icon-close"></div>
      </nav>

      <main>
        <section class="section" id="home">
          <div class="container grid">
            <div class="image">
              <img className="inicio" src="./devmulher.png" alt="mulher-devr" />
            </div>
            <div class="text">
              <h2 class="title">Olá eu sou Suélly Araujo</h2>
              <p>Desenvolvedora Front End/Fullstack</p>
              <p>Entusiasta de tecnologia e apaixonada por aprender!</p>
              <a class="button" href="#about">
                Me conheça
              </a>
            </div>
          </div>
        </section>

        <div class="divider-1"></div>

        <section class="section" id="about">
          <div class="container grid">
            <div class="image">
              <img src="./foto.jpg" alt="eu" />
            </div>
            <div class="text">
              <h2 class="title titulo-teste">Um pouco sobre mim</h2>

              <p>
                Aprendi com o tempo que mudanças são bem-vindas e começos são
                necesssários! Sou turismóloga de formação e pós-graduada em
                educação. Após perceber que podia chegar mais longe, me encantei
                pela área de tecnologia e decidi fazer a transição de carreira
                para adquirir mais conhecimentos e experiências.
              </p>
              <br />
              <p>
                Com a formação em FrontEnd agora minha meta é continuar a me
                aprofundar em busca da finalização do curso em fullstack e
                contribuir com os meus conhecimentos além de alcançar o sucesso
                profissional no mundo da tecnologia.
              </p>
              <br />
              <p>
                Tenho como objetivo trazer todas as técnicas que desenvolvi ao
                longo dos anos no mercado juntamente com as que adquiri
                recentemente. Aqui trago alguns dos projetos que contribuiram no
                meu aprendizado e você pode conferir.
              </p>
            </div>
          </div>
        </section>

        <div class="divider-2"></div>

        <section class="section" id="tec">
          <div class="container grid">
            <header>
              <h2 class="title ajuste  titulo-teste">Tecnologias</h2>
              <div className="ajuste3">
                <div className="card card-ajuste">
                  <p class="subtitle">
                    <strong>Front-End</strong>

                    <li>HTML5 </li>
                    <li>CSS3</li>
                    <li>ReactJS</li>
                    <li>TypeScript</li>
                  </p>
                </div>
                <div className="card card-ajuste">
                  <p class="subtitle">
                    <strong>Back-End</strong>
                    <li>NodeJs</li>
                    <li>PostgreSql</li>
                    <li>MySql</li>
                  </p>
                </div>
              </div>
            </header>
          </div>
        </section>
        <div class="divider-1 div-linha "></div>
        <h2 class="title ajuste2 titulo-teste">Projetos</h2>
        <section class="" id="projetos">
          <Cards />
        </section>

        <div class="divider-1"></div>

        <section class="section" id="qualificacao">
          <div class="container">
            <header>
              <h2 class="title ajuste4 titulo-teste">Qualificação</h2>
            </header>
            <div class="testimonials swiper-container">
              <div class="swiper-wrapper">
                <div class="testimonial swiper-slide">
                  <blockquote>
                    <cite>
                      <img src="./certificado.jpg" alt="certificado" />
                    </cite>
                  </blockquote>
                </div>
              </div>

              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <div class="divider-2"></div>

        <section class="section " id="contact">
          <div class="container grid">
            <div class="text">
              <h2 class="title ajuste5 titulo-teste">Entre em contato!</h2>

              <a
                href="https://api.whatsapp.com/send?phone=+5581999568300&text=Oi! Gostaria de falar com você"
                class="button"
                target="_blank"
              >
                <i class="icon-whatsapp"></i>Fale comigo
              </a>
            </div>

            <div class="links">
              <ul class="grid">
                <li>
                  <i class="icon-phone">
                    <FcCellPhone />
                  </i>{" "}
                  +55 81 9 9956-8300
                </li>

                <li>
                  <i class="icon-mail">
                    <MdAlternateEmail />
                  </i>{" "}
                  suellykarine@yahoo.com.br
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div class="divider-1"></div>
      </main>

      <footer class="section">
        <div class="container grid">
          <div class="brand">
            <a class="logo logo-alt" href="#home">
              Suélly<span>Dev</span>.
            </a>
            <p>©2022 SuellyAraujo.</p>
            <p>Todos os direitos reservados.</p>
          </div>

          <div class="social grid">
            <a href="https://www.linkedin.com/in/suellyaraujo/" target="_blank">
              {" "}
              <AiFillGithub size={50} /> <i class="icon-instagram"></i>
            </a>
            <a href="https://github.com/suellykarine" target="_blank">
              <AiFillLinkedin size={50} />

              <i class="icon-facebook"></i>
            </a>
          </div>
        </div>
      </footer>

      <a href="#home" class="back-to-top">
        {" "}
        <i class="icon-arrow-up"></i>
      </a>
    </div>
  );
};

export default LandingPageNovo;
