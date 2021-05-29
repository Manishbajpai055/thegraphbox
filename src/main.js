import { createApp, pushScopeId } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router/router'

const app = createApp(App)
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

app.use(router)
app.mount('#app')

import dayjs from 'dayjs'
import { createStore } from 'vuex'
import { createClient } from '@supabase/supabase-js'

const options = {}
let URL = 'https://sqmclfqjspvjvnkwftlk.supabase.co'
let SUPABASEKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDU2MDQxMCwiZXhwIjoxOTM2MTM2NDEwfQ.QxZePsLAr_8KfMKuCaI6uspY_rpfFpNo0fuZJkk-5rg'
const supabase = createClient(URL, SUPABASEKEY, options)


export const store = createStore({
    state: {
        UserTZ: dayjs().format(),
        CurrentMeetingstime: "22:02",
        Meetingstime: []
    },
    mutations: {
        setCurrentTime(state, paylod) {
            state.CurrentMeetingstime = paylod
            state.Meetingstime.push(paylod)
        }
    },
    actions: {
        async getScheduleDT(state, paylod) {
            const { data, error } = await supabase
                .from('Meeting')
                .select()
            console.log(data, this.Meetingstime)

        }
    },
    methods: {
    },
    getters: {
        getMeetingsTime: (state) => state.Meetingstime
    }

})

app.use(store)