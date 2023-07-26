<template>
	<div v-if="hasProduct">
		<h1>Title: {{ product.title }}</h1>
		<router-link class="link-offset-1 link-secondary" :to="{ name: 'catalog'}">
			Back to product
		</router-link>
		<hr>
		<div class="alert alert-success">
			price
			{{ product.price }}
		</div>
		<button :disabled="isLoading" v-if="inCart(id)" @click.once="remove(id)" type="button" class="btn btn-danger">
			Remove
		</button>
		<button :disabled="isLoading" v-else @click.once="add(id)" type="button" class="btn btn-success">
			Add to cart
		</button>
	</div>
	<app-e404 v-else></app-e404>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppE404 from '@/components/E404.vue'

export default {
	components: {
		AppE404
	},
	computed: {
		...mapGetters('products', ['itemId']),
		...mapGetters('cart', [ 'inCart', 'isLoading']),
		id() {
			return parseInt(this.$route.params.id)
		},
		validId() {
			return /^[1,9]+\d*$/.test(this.id)
		},
		product() {
			return this.itemId(this.id)
		},	
		hasProduct() {
			return this.validId && this.product !== false
		}
	},
	methods: {
		...mapActions('cart', [ 'add', 'remove' ])
	}
}
</script>