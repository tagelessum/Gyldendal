<template>
    <div>
        <div class="container mt-5">
            <b-card
            style="max-width: 40rem;"
            class="mb-2"
            >
            <b-form-input v-model="searchQuery" class="mb-3" type="text"></b-form-input>
            <b-button variant="success" v-on:click="searchUser">Search</b-button>
            <ul class="list-group">
                <li class="list-group-item mt-3" v-for="(response, index) of responses" :key="index">{{response}}</li>
            </ul>
            </b-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'SearchTitle',
    methods: {
        searchUser: function(){
            console.log("searching")
            console.log(this.searchQuery)
        axios.get(`https://partnerapi-prod.rettsdata.no/api/search?query=${this.searchQuery}&rows=25&offset=0`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer e6bc0f17-a19f-41a8-95dc-cdc1c4e666f3'
            }
        }).then(resp =>{
        console.log(resp.data);
        resp.data.hitItems.forEach(element => {
            this.responses.push(element.title);    
        });

    })},
  },
   data() {
    return {
        responses: [],
        searchQuery: ""
        }
    }   
}
</script>

<style scoped>
.container {
    margin: auto;
}

</style>