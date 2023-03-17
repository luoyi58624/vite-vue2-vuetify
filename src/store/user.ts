import { defineStore } from 'pinia'
import router from '@/router'
import { Notify } from 'vuetify-message-snackbar'

export interface UserModel {
	_id: number
	username: string
	email: string
	nickname: string
	sex: number
	avatarUrl: string
	roles: Array<RoleModel>
	permissions: Array<PermissionModel>
}

export interface RoleModel {
	_id: number
	roleName: string
	roleDesc: string
}

export interface PermissionModel {
	_id: number
	permissionName: string
	permissionDesc: string
}

export const useAdminUserStore = defineStore('admin-user', {
	state: () => ({
		user: {
			_id: 0,
			username: '',
			email: '',
			nickname: '',
			sex: -1,
			avatarUrl: '',
			roles: [],
			permissions: []
		} as UserModel
	}),
	actions: {
		logout() {
			request.get('/user/logout').then(res => {
				localStorage.removeItem('token')
				this.$reset()
				router.replace('/login').then(() => {
					Notify.success(res.msg)
				})
			})
		}
	}
})
