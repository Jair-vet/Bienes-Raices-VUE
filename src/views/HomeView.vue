<script setup>
    import usePropiedades from '@/composable/usePropiedades';
    import Propiedad from '../components/Propiedad.vue';
    import {priceProperty} from '@/helpers/index'

    const { propiedadesCollection } = usePropiedades()


</script>

<template>
    <h1 class="text-center text-h3 font-weight-bold my-5">Propiedes a la Venta</h1>

    <v-card flat class="py-10">
        <v-row>
            <Propiedad 
                v-for="propiedad in propiedadesCollection"
                :key="propiedad.id"
                :propiedad="propiedad"
                :priceProperty="priceProperty"
            />
        </v-row>
    </v-card>
</template>
