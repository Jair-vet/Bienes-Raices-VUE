<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { doc } from '@firebase/firestore'; 
    import { useDocument, useFirestore } from 'vuefire';
    import usePropiedades from '@/composable/usePropiedades';
    import {priceProperty} from '@/helpers/index'
    import "leaflet/dist/leaflet.css"
    import { LMap, LGeoJson, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
    import useLocationMap from '@/composable/useLocationMap'
    import { watch } from 'vue';

    const { zoom, center } = useLocationMap()

    const route = useRoute()
    const db = useFirestore()
    const docRef = doc(db, 'propiedades', route.params.id)
    const propiedad = useDocument(docRef)

    watch(propiedad, (propiedad) => {
        center.value = propiedad.ubicacion
    })

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

        <v-row>
            <!-- Descripcion -->
            <v-col
                cols="12"
                md="8"
            >
                <div class="text-pre-wrap py-10">
                    {{ propiedad?.descripcion }}
                </div>
            </v-col>

            <!-- Descripcion -->
            <v-col
                cols="12"
                md="4"
            >
                <div class="py-10" style="height:600px;">
                    <LMap 
                        v-model:zoom="zoom" 
                        :center="center" 
                        :use-global-leaflet="false"
                    >
                    <LMarker
                        :lat-lng="center"
                    >   
                        <LPopup>
                            {{ propiedad.titulo }}
                        </LPopup>
                    </LMarker>
                    <LTileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    ></LTileLayer>
                    </LMap>
                </div>
            </v-col>
        </v-row>

    </v-card>
</template>

<style scoped>
    .text-pre-wrap{
        white-space: pre-wrap
    }
</style>
