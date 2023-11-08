import PropTypes from "prop-types"

const ProfileDetailsToggler = ({ analysisState, toggleAnalysisState }) => {
	return (
		<div className="profile-details__toggler">
			<span
				className={`profile-details__toggle ${analysisState ? `active` : ``}`}
				onClick={toggleAnalysisState}>
				My Analysis
			</span>
			<span
				className={`profile-details__toggle ${!analysisState ? `active` : ``}`}
				onClick={toggleAnalysisState}>
				Bookmark
			</span>
		</div>
	)
}

ProfileDetailsToggler.propTypes = {
	analysisState: PropTypes.bool,
	toggleAnalysisState: PropTypes.func,
}

export default ProfileDetailsToggler
