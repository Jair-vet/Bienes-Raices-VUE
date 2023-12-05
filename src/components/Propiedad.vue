<script setup>
    defineProps({
        propiedad: {
            type: Object
        },
        priceProperty: {
            type: Function
        }
    })
</script>

<template>
    <v-col
        cols="12"
        md="4"
    >
        <v-card>
            <v-img :src="propiedad.imagen" height="250" cover/>

            <!-- Titulo -->
            <v-card-title class="text-center">
                {{ propiedad.titulo }}
            </v-card-title>

            <!-- Descripcion -->
            <v-card-text class="text-truncate">
                {{ propiedad.descripcion }}
            </v-card-text>

            <!-- Precio -->
            <v-card-title class="text-h5 font-weight-bold">
                Precio: {{ priceProperty(propiedad.precio) }}
            </v-card-title>

            <template v-slot:actions>
                <v-btn
                    block
                    color="info"
                    variant="tonal"
                    :to="{name: 'propiedad', params: {id: propiedad.id} }"
                >
                    Ver Información
                </v-btn>
            </template>

        </v-card>
    </v-col>
</template>