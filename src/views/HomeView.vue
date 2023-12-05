<script setup>
    import usePropiedades from '@/composable/usePropiedades';
    import Propiedad from '../components/Propiedad.vue';
    import {priceProperty} from '@/helpers/index'

    const {  propiedadesFiltradas, alberca } = usePropiedades()

</script>

<template>
    <h1 class="text-center text-h3 font-weight-bold my-5">Propiedes a la Venta</h1>

    <v-card flat class="py-10">
        <!-- <v-card-title class="text-h5">
            Búsqueda
            <v-checkbox label="Alberca" v-mode="alberca"/>
        </v-card-title> -->
        <v-row>
            <Propiedad 
                v-for="propiedad in propiedadesFiltradas"
                :key="propiedad.id"
                :propiedad="propiedad"
                :priceProperty="priceProperty"
            />
        </v-row>
    </v-card>
</template>
