import './styles.scss'
import PropTypes from 'prop-types'

const ButtonStyles = { ALT_1: 1, ALT_2: 2 }
const styles = ['', 'alt1', 'alt2']

const Button = props => {
	return (
		<button
			className={`main-button ${props.centered ? 'centered' : ''} ${
				props.disabled ? 'disabled' : ''
			}${props.styles ? styles[props.styles] : ''} `}
			onClick={() => (!props.disabled ? props.onClick() : null)}
		>
			{props.center ? <span></span> : null}
			<span>{props.text}</span>
		</button>
	)
}

export { Button, ButtonStyles }

Button.propTypes = {
	arrow: PropTypes.any,
	center: PropTypes.any,
	centered: PropTypes.any,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	onClick: PropTypes.func,
	onSubmit: PropTypes.func,
	play: PropTypes.any,
	styles: PropTypes.any,
	tabIndex: PropTypes.any,
	text: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.string,
}
