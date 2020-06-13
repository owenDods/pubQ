import React from 'react';
import PropTypes from 'prop-types';

import Button from '../basics/Button';

export const className = 'questionManagerNav';

const QuestionManagerNav = () => (

	<div className={className}>

		<div className={`${className}__back`}>

			<Button label="&#9664;" />

		</div>

		<div className={`${className}__forward`}>

			<Button label="&#9654;" />

		</div>

	</div>

);

QuestionManagerNav.propTypes = {};

export default QuestionManagerNav;
