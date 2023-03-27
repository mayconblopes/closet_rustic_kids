import React, { Fragment } from 'react'
import './about.styles.jsx'
import { AboutTextContainerStyle, MapStyle } from './about.styles.jsx'

export default function About() {
  return (
    <Fragment>
      <AboutTextContainerStyle>
        <h1>Bem vindo(a) à BFMM!</h1>
        <p>
          Somos uma empresa experiente no comércio de madeiras, atuando há mais
          de 33 anos no mercado. Oferecemos variados tipos de madeira, tanto
          bruta quanto aparelhada, suprindo todas as necessidades do cliente.
        </p>
        <p>
          Além disso, contamos com serviços de marcenaria e
          oferecemos produtos de qualidade, como portas, fechaduras, telhas e
          madeirite. Acreditamos que a qualidade do serviço é fundamental para
          um negócio bem-sucedido e, por isso, trabalhamos com preços
          competitivos sem comprometer a qualidade do produto final.
        </p>
        <p>
          Mas o nosso diferencial vai além dos nossos produtos, estamos
          empenhados em fornecer um atendimento excelência ao nosso cliente.
          Estamos sempre prontos para ajudar, esclarecer dúvidas e proporcionar
          uma experiência única de compra.
        </p>
        <p>
          Nossa prioridade é a satisfação total do cliente e, por isso,
          trabalhamos diariamente para manter elevados padrões de qualidade em
          todos os aspectos do nosso negócio. Venha nos visitar e conhecer de
          perto tudo o que temos a oferecer.
        </p>
        <MapStyle>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.867822426066!2d-41.35155758438511!3d-21.746649402970874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdd46f91284b1d%3A0x5afc615dca722dd6!2sAv.%20Alberto%20Torres%2C%20888%20-%20Parque%20Leopoldina%2C%20Campos%20dos%20Goytacazes%20-%20RJ%2C%2028053-587!5e0!3m2!1spt-BR!2sbr!4v1679922784068!5m2!1spt-BR!2sbr'
            width='600'
            height='450'
            allowfullscreen=''
            loading='lazy'
          ></iframe>
        </MapStyle>
      </AboutTextContainerStyle>
    </Fragment>
  )
}
