import PropTypes from 'prop-types';
import { SiJquery, SiWebpack, SiExpress, SiMongodb, SiNpm } from "react-icons/si";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";

const iconMapping = {
    FaHtml5, FaCss3, FaJs, FaReact,
    SiJquery, FaNodeJs, SiExpress, SiMongodb, FaGit, FaGithub,
    SiWebpack, SiNpm
  };

const SingleSkill = ({ name = 'Skill Name', icon = 'FaHtml5' }) => {
    const IconComponent = iconMapping[icon];

    return (
        <div className="col-lg-4 col-sm-6 single_skill_wrapper">
            <div className="single_skill">
                {IconComponent ? <IconComponent size={24} color="currentColor" /> : <span>❓</span>}
                <p className="single_skill_name">{name}</p>
            </div>
        </div>
    );
}

SingleSkill.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string
};

export default SingleSkill;
