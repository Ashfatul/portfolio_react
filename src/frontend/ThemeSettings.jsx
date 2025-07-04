import "../assets/scss/settings.scss"

const ThemeSettings = () => {
    return (
        <div className="settings_container">
            <div className="container">
                <h2>Customize Theme Settings</h2>

                <div className="row">
                    <div className="col-md-3">
                        <div className="settings_item">
                            <label htmlFor="primaryColor">Primary Color</label>
                            <input type="color" name="primaryColor" id="primaryColor" />
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="settings_item">
                            <label htmlFor="secondaryColor">Secondary Color</label>
                            <input type="color" name="secondaryColor" id="secondaryColor" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemeSettings