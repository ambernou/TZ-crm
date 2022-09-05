import { createStore } from 'vuex'

const store = createStore({
    state: {
        leadsArray: [
            {
                name: "Тест",
                status: 50304412,
                responsible: 8503891,
                date: 1661852077,
                price: 100
            },
            {
                name: "Купить 5 рабочих столов",
                status: 50304415,
                responsible: 8503891,
                date: 1661925555,
                price: 20000
            }
        ]
    },
    mutations: {
        getLeadsArray(state, payload) {
            // const data = payload.data._embedded.leads
            payload.forEach(el => {
                const leadInfo = {
                    name: el.name,
                    status: el.status_id,
                    responsible: el.responsible_user_id,
                    date: el.created_at,
                    price: el.price
                } 
                state.leadsArray.push(leadInfo)
            })
        }
    }
})

export default store