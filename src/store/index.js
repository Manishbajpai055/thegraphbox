import { createStore } from 'vuex'
import { createClient } from '@supabase/supabase-js'
import dayjs from 'dayjs'

console.log(dayjs())
const options = { }
let URL = 'https://sqmclfqjspvjvnkwftlk.supabase.co'
let SUPABASEKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDU2MDQxMCwiZXhwIjoxOTM2MTM2NDEwfQ.QxZePsLAr_8KfMKuCaI6uspY_rpfFpNo0fuZJkk-5rg'
const supabase = createClient(URL, SUPABASEKEY, options)


export const store = createStore({
    state:{
        times : ['10:40 AM' , '00:00 PM', '05:15 PM', '06:00 PM'],
    },
    mutations: {
        
    },
    methods:{
       async increment(state) {
            const { data, error } = await supabase
                .from('cities')
                .select()
            state.count = data

        }
    }
})
