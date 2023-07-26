const BASEURL = 'http://faceprog.ru/reactcourseapi/cart/'

export default {
	namespaced: true,
	state: {
		items: [],
		token: null,
		isLoading: false,
	},
	getters: {
		items: state => state.items,
		inCart: state => id => state.items.some(item => item.id == id),
		length: state => state.items.length,
		itemsDetails: (state, getter, rootState, rootGetters) => {
			return state.items.map(item => {
				let product = rootGetters['products/itemId'](item.id)
				return {...product, cnt: item.cnt}
			})
		},
		total: (state, getter) => {
			return getter.itemsDetails.reduce((acc, item) => {
				return acc + item.price * item.cnt
			}, 0)
		},
		isLoading: state => state.isLoading
		// total: (state, getter, rootState, rootGetters) rootGetters 
		
	},
	mutations: {
		setCart(state, {cart, token}) {
			state.items = cart
			state.token = token
		},
		add(state, id){
			state.items.push({ id, cnt: 1 });
		},
		remove(state, id){
			state.items = state.items.filter(item => item.id != id);
		},
		getCnt(state, {id, cnt}) {
			let item = state.items.find(item => item.id == id)
			item.cnt = cnt
		},
		setLoading(state, value) {
			state.isLoading = value
		}
 	},
	actions: {
		async load({commit}){
			let oldToken = localStorage.getItem('CART__TOKEN')
			let response = await fetch(`${BASEURL}load.php?token=${oldToken}`)
			let {cart, token, needUpdate} = await response.json()
			console.log(oldToken)
			if (needUpdate) {
				localStorage.setItem('CART__TOKEN', token)
			}
 
			commit('setCart', {cart, token})

		},
		async setCnt({state, getters, commit}, {cnt, id}) {
			if (getters.inCart(id)) {
				let response = await fetch(`${BASEURL}change.php?token=${state.token}&id=${id}&cnt=${cnt}`)
				let res = await response.json()

				if (res) {
					let item = getters.itemsDetails.find(item => item.id == id)
					let validCnt = Math.min(Math.max(cnt, 1), item.rest)
					commit('getCnt', {id, cnt: validCnt})
				}
			}
		},
		async add({state, commit, getters }, id){
			commit('setLoading', true)
			try {
				if(!getters.inCart(id)){ 
					let response = await fetch(`${BASEURL}add.php?token=${state.token}&id=${id}`)
					let res = await response.json()
					
					// Мы делаем запрос, получаем рез в json - буллевсоке значение. Если истина, коммити
					if (res) {
						commit('add', id);
					}
				}
			} catch(err) {
				console.log(err)
			} finally {
				commit('setLoading', false)
			}
		},
		async remove({state, commit, getters }, id){
			commit('setLoading', true)
			try {
				if(getters.inCart(id)){
					let response = await fetch(`${BASEURL}remove.php?token=${state.token}&id=${id}`)
					let res = await response.json()
					 
					// Мы делаем запрос, получаем рез в json - буллевсоке значение. Если истина, коммити
					if (res) {
						commit('remove', id);
					}
				}
			} catch(err) {
				console.log(err)
			} finally {
				commit('setLoading', false)
			}
		}
	}
}

/*
	inCart(state){
		return function(id){
			return state.items.some(item => item.id == id);
		}
	}

	inCart: state => id => state.items.some(item => item.id == id)
*/