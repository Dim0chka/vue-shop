<template>
		<app-header></app-header>
		<!-- <el-header>
			<div class="row">
				<div class="col col-sm-9">
					<h1>Site</h1>
				</div>
				<div class="col col-sm-3">
					<div class="alert alert-default">
						<el-badge :value="$store.getters['cart/length']" class="item">
							In Cart
						</el-badge>
						<div>In Total: {{ total }}</div>
					</div>
				</div>
			</div>
		</el-header> -->
		<el-container>
			<!-- <el-aside width="200px"> -->
				
				<!-- <el-tabs tab-position="left" style="height: 200px">
					<el-tab-pane label="User">User</el-tab-pane>
					<el-tab-pane label="Config">Config</el-tab-pane>
					<el-tab-pane label="Role">Role</el-tab-pane>
					<el-tab-pane label="Task">Task</el-tab-pane>
				</el-tabs> -->
				<!-- <div class="container">
					<div class="row">
						<div class="col col-sm-3 menu">
							<ul class="list-group">
								<li class="list-group-item" v-for="item in menu" :key="item.route">
									<router-link :to="{ name: item.route }" exact-active-class="text-danger">
										{{ item.text }}
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div> -->

			<el-container>
				<el-main>
					<div class="col col-sm-9">
						<router-view />
					</div>
				</el-main>

				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
</template>

<script>
import AppHeader from './components/layout/header.vue'
import AppAside from './components/layout/aside.vue'
import { mapGetters, mapActions } from 'vuex';

	export default {
		components: {
			AppHeader, AppAside
		},
		data: () => ({
			menu: [
				{ route: 'catalog', text: 'Products' },
				{ route: 'cart', text: 'Cart' },
				{ route: 'checkout', text: 'Order' }
			]
		}),
		computed: {
			...mapGetters('cart', [ 'total' ])
		}
		// $route, $router
	}
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";

.item {
	margin-top: 10px;
	margin-right: 40px;
}

.el-container {
	flex-direction: column;
}

</style>
