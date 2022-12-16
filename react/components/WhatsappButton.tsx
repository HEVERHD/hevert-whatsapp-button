import React from 'react'
import PropTypes from 'prop-types'
import { useCssHandles } from 'vtex.css-handles'

import './styles.css'

type Props = {
  logo: string // whatspp.png
  phone: string // 3006176641
  message: string // estas comunicandote con vtex io 2023
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const CSS_HANDLES = ['whatsapp_item-main']

  const handles = useCssHandles(CSS_HANDLES)
  const formattedMessage = message.replace(/ /g, '%20')

  return (
    <>
      <div className={handles['whatsapp_item-main']}>
        <a
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={logo}
            width={width}
            height={height}
            alt="logo de whatsapp"
          />
        </a>
      </div>
    </>
  )
}

// INFORMACION PARA BACKOFFICE
WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  heigth: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'mi_logo.png',
  phone: '3006176641',
  message: 'estas comunicandote con vtex io 2023',
  // width: 50,
  // heigth: 50,
}

WhatsappButton.schema = {
  title: 'Boton de whatsapp',
  type: 'object',
  properties: {
    logo: {
      title: 'logo de whatsapp que se relacione con la marca',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Telefono',
      description: 'agrega un numero de telefono con whatsapp',
      type: 'string',
    },
    message: {
      title: 'Mensaje',
      description: 'agrega un mensaje personalizado',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Ancho',
      description: 'Ancho de medida',
      type: 'number',
    },
    heigth: {
      title: 'Altura',
      description: 'Altura de memida',
      type: 'number',
    },
  },
}

export default WhatsappButton
