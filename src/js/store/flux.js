const getState = ({ getStore, setStore }) => {
	return {
		store: {
			apiContacts: [],
			localContacts: [
				{
					name: "Alejandro",
					email: "Arayao@gmail.com",
					address: "666 Fort LauderdaleS",
					phone: "123456"
				}
			]
		},
		actions: {
			addANewContact: (name, email, address, phone, saveLocation, history) => {
				let store = getStore();
				console.log("CLICK", store);
				// This method will receive name, address, phone and email from addContact view
				// and it will post to the backend or to the store
				saveLocation === "store"
					? setStore({
							localContacts: store.localContacts.concat({
								name: name,
								email: email,
								address: address,
								phone: phone
							})
					  })
					: fetch("http://assets.breatheco.de/apis/fake/contact/agenda", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								name: name,
								email: email,
								address: address,
								phone: phone
							})
					  })
							.then(() => {
								fetch("http://assets.breatheco.de/apis/fake/contact/agenda")
									.then(response => response.json())
									.then(data => {
										setStore({ apiContacts: data });
									});
							})

							.then(() => history.push("/contacts/api"));
			},
			editContact: (name, email, address, phone, saveLocation, index) => {
				let store = getStore();
				let updated_store = store.localContacts
					.slice(0, index)
					.concat({
						...store.localContacts[index],
						name: name,
						email: email,
						address: address,
						phone: phone
					})
					.concat(store.localContacts.slice(index + 1));
				console.log("Upd", updated_store);

				setStore({ localContacts: updated_store });
				saveLocation === "store"
					? setStore({
							localContacts: store.localContacts.splice(index, 1, {
								store: [index],
								name: name,
								email: email,
								address: address,
								phone: phone
							})
					  })
					: console.log("api:", name, email, address, phone).then(() => history.push("/"));
			},
			deleteContact: index => {
				let store = getStore();
				console.log("index", index);
				setStore({ localContacts: store.localContacts.filter((item, index) => index !== index) });
			}
		}
	};
};

export default getState;
