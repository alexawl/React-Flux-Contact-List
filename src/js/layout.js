import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { AddContact } from "./views/addContact";
import { EditContact } from "./views/editContact";
import { Contacts } from "./views/contacts";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

export const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/add-contact/:thetype" component={AddContact} />
					<Route path="/contacts/" component={Contacts} />
					<Route path="/edit-contact/:theindex" component={EditContact} />
					<Route path="/" component={Contacts} />
					<Route render={() => <h1>Not found!</h1>} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
