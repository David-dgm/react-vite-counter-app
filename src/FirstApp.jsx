import PropTypes from 'prop-types';



export const FirstApp = ( { title, subTitle,name } ) => {

  


   return (
    <>
    {/* <code>{ JSON.stringify( newMessage)  }</code> */}

    <h1 data-testid='h1-title'> {title}</h1>

    <p>{name}</p>
    <p>{subTitle}</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}


FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name: 'David',
}