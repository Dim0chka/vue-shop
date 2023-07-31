<template>
	<div v-if="hasProduct">
		<el-page-header :to="{ name: 'catalog'}">
			<template #breadcrumb>
			  <el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ name: 'catalog'}">
				  products
				</el-breadcrumb-item>
				<el-breadcrumb-item>
					<a href="./page-header.html">route 1</a>
				</el-breadcrumb-item>
				<!-- <el-breadcrumb-item>route 2</el-breadcrumb-item> -->
			  </el-breadcrumb>
			</template>
			<template #content>
			  <span class="text-large font-600 mr-3"> {{ product.title }} </span>
			</template>
		</el-page-header>
		<!-- <h1>Title: {{ product.title }}</h1> -->
		<!-- <router-link class="link-offset-1 link-secondary" :to="{ name: 'catalog'}">
			Back to product
		</router-link> -->
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