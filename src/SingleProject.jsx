/* eslint-disable react/prop-types */
const SingleProject = ({ item }) => {
    return (
        <div className="col-md-6 col-xxl-4">
            <div className="single_project_item">
                <div className="single_project_img">
                    <img src={item.image} alt={item.title} />
                </div>

                <div className="single_project_item_content">
                    <h3 className="single_project_title">
                        {item.title}
                    </h3>
                    <p className="single_project_time">
                        {item.time}
                    </p>
                    <p className="single_project_brief">
                        {item.brief}
                    </p>
                    <div className="single_project_tags">
                        {item.tags.map((tag) => (
                            <span className="tag" key={tag}>{tag}</span>
                        ))}
                    </div>
                    <div className="single_project_links">
                        {item.links?.live &&
                            <a href={item.links.live} className="single_project_link">
                                Visit Live
                            </a>
                        }
                        {item.links?.github &&
                            <a href={item.links.github} className="single_project_link">
                                Github Repo
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject
