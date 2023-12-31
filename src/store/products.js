import { all } from "core-js/fn/promise";

export default {
	namespaced: true,
	state: {
		items: [],
		error: null,
		loading: true
	},
	getters: {
		all: state => state.items,
		itemId: state => id => state.items.find(item => item.id == id) || false,
		isLoading: state => state.loading
	},
	mutations: {
		setItems(state, products) {
			state.items = products
		},
		isLoading(state) {
			state.loading = false
		}
	},
	actions: {
		async load({commit}) {
			try {
				let response = await fetch('http://faceprog.ru/reactcourseapi/products/all.php')
				let products = await response.json()
				commit('setItems', products)
			} catch(err) {
				console.log(err)
			} finally {
				commit('isLoading')
			}
		}
	}
}
  