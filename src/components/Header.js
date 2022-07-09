import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log('hoge');
    console.log(e);
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        text='Add'
        color='green'
        onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Default Title'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// const headingStyle = {
//   color: 'red',
//   background: 'black'
// }

export default Header
