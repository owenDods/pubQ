import PropTypes from 'prop-types';

export const multipleChoiceQuestionShape = {
	question: PropTypes.string.isRequired,
	answers: PropTypes.arrayOf(PropTypes.string).isRequired,
	correctAnswer: PropTypes.string.isRequired,
	imgUrl: PropTypes.string
};

export const roundsShape = {
	name: PropTypes.string.isRequired,
	questions: PropTypes.arrayOf(PropTypes.shape({
		type: PropTypes.string.isRequired,
		content: PropTypes.oneOfType([
			PropTypes.shape(multipleChoiceQuestionShape)
		])
	}))
};

export default {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	img: PropTypes.string,
	rounds: PropTypes.arrayOf(PropTypes.shape(roundsShape))
};
