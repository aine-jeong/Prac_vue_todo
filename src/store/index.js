import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';
import todo from './modules/todo';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todo,
        user
        //앞뒤 이름 같으면 생략 가능
        // todo: todo,
        // user: user
    }
    // state: { //=data
    //     todos: [
    //         { id: 1, text: 'buy a car', checked: false},
    //         { id: 2, text: 'play game', checked: false},
    //       ],
    //     //   users: []
    // },
    // mutations: { //데이터 변경시 사용
    //     // SET_USERS(state, users) {
    //     //     state.users = users;
    //     // },
    //     ADD_TODO(state, value) {
    //         state.todos.push ({
    //             id: Math.random(),
    //             text: value,
    //             checked: false
    //           });
    //     },
    //     TOGGLE_TODO(state, {id, checked}) {
    //         const index = state.todos.findIndex(todo => {
    //             return todo.id === id;
    //           });
    //           state.todos[index].checked = checked;
    //     },
    //     DELETE_TODO(state, todoId) {
    //         const index = state.todos.findIndex( todo => {
    //             return todo.id === todoId;
    //           }); 
    //           state.todos.splice(index, 1);
    //     }
    // },
    // actions: { //=method
    //     // getUsers({ commit }) {
    //     //     axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
    //     //         commit('SET_USERS', res.data);
    //     //     });
    //     // },
    //     addTodo({commit}, value) {
    //         //비동기작업
    //         setTimeout(function() {
    //             commit('ADD_TODO', value);
    //         }, 500);
    //     },
    //     toggleTodo({commit}, payload) { //payload: 데이터
    //         setTimeout( function() {
    //             commit('TOGGLE_TODO', payload);
    //         }, 500);
    //     },
    //     deleteTodo({commit}, todoId) {
    //         setTimeout( function() {
    //             commit('DELETE_TODO', todoId)
    //         }, 500);
    //     }
    // },
    // getters: { //=computed
    //     numberOfCompletedTodo: state => {
    //         return state.todos.filter(todo => todo.checked).length;
    //     }
    // }
});