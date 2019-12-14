import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import ScrollToTop from "./component/scrollToTop";

import { EditContact } from "./views/editContact";
import injectContext from "./store/appContext";
import { Contacts } from "./views/contacts";
import { AddContact } from "./views/addContact.js";

export const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/add-contact/:thetype" component={AddContact} />
					<Route exact path="/index.html" component={Contacts} />
					<Route path="/contacts/:type" component={Contacts} />
					<Route path="/edit-contact/:theindex" component={EditContact} />
					<Route render={() => <h1>Not found!</h1>} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
