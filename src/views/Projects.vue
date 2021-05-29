<template>
    <div>
        hell
        <button @click="getbucket">hello</button>
    </div>
</template>


<script>
import { createClient } from '@supabase/supabase-js'
import process from 'process'

// Create a single supabase client for interacting with your database 
export default {
    setup() {
        
    },
    methods:{
       async getbucket(){
           const options = { }
           const supabaseUrl = "https://wdtzlgqeqichshtcxaay.supabase.co"
            const supabaseKey = process.env.SUPABASE_KEY
            const supabase = createClient(supabaseUrl, supabaseKey)
            console.log("supa", supabase);
            const { data, error } = await supabase
            .storage
            .from('thegraphbox')
            .createSignedUrl('3d/1.jpg', 60)
            console.log(data,error)
        }

    }

}
</script>