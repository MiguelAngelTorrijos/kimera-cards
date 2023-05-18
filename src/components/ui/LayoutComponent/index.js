import PropTypes from 'prop-types'
import './styles.scss'
import { ReactComponent as Logo } from '../../../assets/KimeraLogo.svg'

const LayoutComponent = ({ children }) => {
	return (
		<div className='layout'>
			<Logo className='logo' />
			<div className='container'>{children}</div>
		</div>
	)
}

LayoutComponent.propTypes = {
	children: PropTypes.any,
}

export default LayoutComponent
