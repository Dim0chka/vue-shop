<template>
	<div>
		<h1>Products</h1>
		<div class="row">
			<div v-if="loading" class="d-flex justify-content-center align-items-center">
				<div class="spinner-border" role="status"></div>
			</div>  
			<div class="col col-sm-4 mb-3 mt-3" v-for="pr in productList" :key="pr.id">
				<div class="card">
					<div class="card-body">
						<h3>{{ pr.title }}</h3>
						<div>{{ pr.price }}</div>
						<hr>
						<router-link :to="{ name: 'product', params: { id: pr.id } }">Read more</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>    

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters('products', { productList: 'all', loading: 'isLoading'}),
		...mapGetters('cart', [ 'inCart' ])
	},
	methods: {
		...mapActions('cart', [ 'add', 'remove' ])
	}
}

/* 
	...mapGetters('products', { productList: 'all' })

	productList(){
		return $this.store.getters['products/all']
	}

	<router-link :to="'/product/' + pr.id">Read more</router-link>
*/
</script>