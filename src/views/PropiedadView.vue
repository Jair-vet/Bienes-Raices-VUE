<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { doc } from '@firebase/firestore'; 
    import { useDocument, useFirestore } from 'vuefire';
    import usePropiedades from '@/composable/usePropiedades';
    import {priceProperty} from '@/helpers/index'


    const route = useRoute()
    const db = useFirestore()
    const docRef = doc(db, 'propiedades', route.params.id)
    const propiedad = useDocument(docRef)


</script>


<template>
    <v-card flat>
        <v-card-title class="text-center mt-5 text-h4 py-5 font-weight-bold">
            {{ propiedad?.titulo }}
        </v-card-title>
        <v-img
            :src="propiedad?.imagen"
            height="550"
            cover
        />

        <div class="bg-blue-grey-lighten-5 d-flex flex-column flex-md-row align-center">
            <!-- Precio -->
            <v-card-text>
                Precio: <span class="font-weight-bold">{{ priceProperty(propiedad?.precio) }}</span>
            </v-card-text>

            <!-- Baños -->
            <v-card-text>
                Baños: <span class="font-weight-bold">{{ propiedad?.wc }}</span>
            </v-card-text>

            <!-- Estacionamiento -->
            <v-card-text>
                Estacionamiento: <span class="font-weight-bold">{{ propiedad?.estacionamiento }}</span>
            </v-card-text>

            <!-- Habitaciones -->
            <v-card-text>
                Habitaciones: <span class="font-weight-bold">{{ propiedad?.habitaciones }}</span>
            </v-card-text>
        </div>
    </v-card>


</template>

