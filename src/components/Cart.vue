<template>
	<div>
		<h1>Cart</h1>
		<hr>
		<div>
			<table class="table">
				<thead>
				  <tr>
					<th scope="col">#</th>
					<th scope="col">Title</th>
					<th scope="col">Price</th>
					<th scope="col">Count</th>
					<th scope="col">Change</th>
					<th scope="col">Event</th>
				  </tr>
				</thead>
				<tbody>
				  <tr v-for="item, i in itemsDetails" :key="item.id">
					<th scope="row">{{ i + 1 }}</th>
					<th>{{ item.title }}</th>
					<th>{{ item.price  * item.cnt}}</th>
					<th>{{ item.cnt }}</th>
					<th>
						<button :disabled="item.cnt == item.rest" @click="setCnt({cnt: item.cnt + 1, id: item.id})" class="btn btn-primary">+1</button>
						<button :disabled="item.cnt === 1" @click="setCnt({cnt: item.cnt - 1, id: item.id})" class="btn btn-primary">-1</button>
					</th>
					<th>
						<button @click="remove(item.id)" class="btn btn-warning">Remove</button>
					</th>
				  </tr>
				</tbody>
			  </table>
		</div>
		<div>
			<h2>Total: {{ total }}</h2>
		</div>
		<router-link :class="{disabled: itemsDetails == 0}" class="btn btn-success" :to="{ name: 'checkout' }">
			Order now
		</router-link>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

	export default {
		// data() {
		// 	return {
		// 		boolean: items !== []
		// 	}
		// },
		computed: {
			...mapGetters('cart', ['itemsDetails', 'total']),
			// ...mapGetters('products', ['itemId'])
		},
		methods: {
			...mapActions('cart', ['setCnt', 'remove'])
		}
	}
</script>

<style scoped>
.disabled {
    opacity: 0.5;
    pointer-events: none;
}


</style>