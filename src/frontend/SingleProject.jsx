/* eslint-disable react/prop-types */
const SingleProject = ({ item }) => {
    return (
        <div className="col-md-6 col-xxl-4">
            <div className="single_project_item">
                <div className="single_project_img">
                    <img src={item.image ? item.image : '/noimage.png'} alt={item.title} />

                    <p className="single_project_time">
                        {item.time}
                    </p>
                </div>

                <div className="single_project_item_content">
                    <h3 className="single_project_title">
                        {item.title}
                        {item.links?.live &&
                            <a href={item.links.live} title="Visit Website" className="single_project_link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                            </a>
                        }
                    </h3>
                    <p className="single_project_tagline">Static Tag Line</p>
                    <p className="single_project_brief">
                        {item.brief}
                    </p>
                    <div className="single_project_tags">
                        {item.tags.map((tag) => (
                            <span className="tag" key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject
