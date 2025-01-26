import PropTypes from 'prop-types';

const SingleSkill = ({ name = 'Skill Name', icon = 'https://placehold.co/100' }) => {
    return (
        <div className="col-lg-4 col-sm-6 single_skill_wrapper">
            <div className="single_skill">
                <img src={icon} className="single_skill_icon" alt={name} />
                <p className="single_skill_name">{name}</p>
            </div>
        </div>
    )
}

SingleSkill.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string
};

export default SingleSkill;
