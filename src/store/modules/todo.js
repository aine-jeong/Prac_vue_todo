export default {
    state: { //=data
        todos: [
            { id: 1, text: 'buy a car', checked: false},
            { id: 2, text: 'play game', checked: false},
          ],
    },
    mutations: { //데이터 변경시 사용
        ADD_TODO(state, value) {
            state.todos.push ({
                id: Math.random(),
                text: value,
                checked: false
              });
        },
        TOGGLE_TODO(state, {id, checked}) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
              });
              state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex( todo => {
                return todo.id === todoId;
              }); 
              state.todos.splice(index, 1);
        }
    },
    actions: { //=method
        addTodo({commit}, value) {
            setTimeout(function() {
                commit('ADD_TODO', value);
            }, 500);
        },
        toggleTodo({commit}, payload) { //payload: 데이터
            setTimeout( function() {
                commit('TOGGLE_TODO', payload);
            }, 500);
        },
        deleteTodo({commit}, todoId) {
            setTimeout( function() {
                commit('DELETE_TODO', todoId)
            }, 500);
        }
    },
    getters: { //=computed
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
}