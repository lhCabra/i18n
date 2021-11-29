import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";
import 'bootstrap/dist/css/bootstrap.min.css';

const getMessages = () => {
    var resp;
	if(navigator.language==='en')
	{
		resp=localeEnMessages
	}
	else{
		resp=localeEsMessages
	}

    return resp;
}



ReactDOM.render(
	<IntlProvider locale={navigator.language} messages= {getMessages()}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);

