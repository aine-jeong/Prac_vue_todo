<template>
    <div>
        User List
        <div v-for="user in users" :key="user.id">
            {{ user.name }}
        </div>
    </div>
</template>

<script>
//import axios from 'axios';
import { mapState, mapActions } from 'vuex';
export default {
    // data() {
    //     return {
    //         users: []
    //     }
    // },
    created() {
        this.getUsers();        
    },
    computed: { //이름만 넣어주면 Mapping해주는 기능 (vuex 제공)
        ...mapState({
            // 'todos'
            // 'users'
            //Modules 사용
            users: state => state.user.users
        })
        // users() {
        //     return this.$store.state.users;
        // },
        // todos() {
        //     return this.$store.state.todos;
        // }
    },
    methods: {
        ...mapActions('user', ['getUsers'])
        // getUsers() {
        //     this.$store.dispatch('getUsers');
        //     // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        //     // this.users = res.data;
        //     // });
        // }
    }
}
</script>