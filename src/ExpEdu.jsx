import PropTypes from 'prop-types';

const ExpEdu = ({ item }) => {
    if (!item) {
        console.error('Error: item prop is missing.');
        return null;
    }

    return (
        <div className="col-12">
            <div className="single_journey_item">
                <div className="single_journey_org">
                    {item.institution ? item.institution : item.organization}
                </div>
                <div className="single_journey_as">
                    {item.degree ? item.degree : item.position}
                </div>
                <div className="single_journey_duration">
                    {item.duration}
                </div>
                <div className="single_journey_brief">
                    {item.brief}
                </div>
                {item.result &&
                    <div className="single_journey_result">
                        {item.result}
                    </div>
                }
            </div>
        </div>
    );
}

ExpEdu.propTypes = {
    item: PropTypes.shape({
        institution: PropTypes.string,
        organization: PropTypes.string,
        degree: PropTypes.string,
        position: PropTypes.string,
        duration: PropTypes.string,
        brief: PropTypes.string,
        result: PropTypes.string,
    }).isRequired,
};

export default ExpEdu;
