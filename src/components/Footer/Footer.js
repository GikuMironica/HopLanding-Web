import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
import Select from "react-select";
import {useTranslation} from "react-i18next";
import {ArrowForwardOutline} from 'react-ionicons';

function Footer() {
    const options = [
        {value: "de", label: "German"},
        {value: "en", label: "English"},
    ];

    const {t, i18n} = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.value);
        localStorage.setItem("language", JSON.stringify(event.value));
    };

    const chosenLanguageIndex = options.indexOf(options.find(item => item.value === i18n.language));
    return (
        <div>
            <nav className="footer">
                <div className="container clearfix">
                    <div className="row d-flex justify-content-start navigation">

                        <div className="col-md align-items-start">
                            <h4>HopAut</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/">{t("header.home")}</Link></li>
                                <li><Link to="/login">{t("header.login")}</Link></li>
                                <li><Link to="/register">{t("header.register")}</Link></li>
                            </ul>
                        </div>
                        <div className="col-md align-items-start">
                            <h4>{t("footer.company")}</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/about-us">{t("footer.about")}</Link></li>
                            </ul>
                        </div>
                        <div className="col-md align-items-start">
                            <h4>{t("footer.legal")}</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/legal/privacy">{t("footer.privacy")}</Link></li>
                                <li><Link to="/legal/terms">{t("footer.terms")}</Link></li>
                                <li><Link to="/legal/impressum">{t("footer.impressum")}</Link></li>
                            </ul>
                        </div>
                        <div className="col-md align-items-start">
                            <h4>Newsletter</h4>
                            <form>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder={t("auth.email")}
                                           aria-label="Email address" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                                        <ArrowForwardOutline
                                            color={'#FFFFFF'}
                                        /></button>
                                </div>
                            </form>
                            <p className="fs-6">{t('footer.newsletter-text')}</p>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="row d-flex align-items-center">
                            <div className="col-md align-items-start">
                                <Select defaultValue={options[chosenLanguageIndex]} options={options}
                                        onChange={changeLanguage}/>
                            </div>
                            <div className="col-md align-items-end">
                                <p>&copy; 2021 Hopaut UG (haftungsbeschränkt)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Footer;
