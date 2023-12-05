<script setup>
    import usePropiedades from '@/composable/usePropiedades';
    import {priceProperty} from '../helpers/index'

    const { propiedadesCollection } = usePropiedades()

</script>
<template>
    <h2 class="text-center text-h3 my-5 font-weight-bold">Admin Panel</h2>

    <v-btn 
        color="blue"
        variant="flat"
        :to="{name: 'nueva-propiedad'}"
    >
        Nueva Propiedad
    </v-btn>

    <v-card class="mx-auto mt-10" flat>
        <v-list>
            <v-list-item
                v-for="propiedad in propiedadesCollection"
                :key="propiedad.id"
            >
                <template v-slot:prepend>
                    <v-list-item :start="true">
                        <img width="180" :src="propiedad.imagen" />
                    </v-list-item>
                </template>

                <v-list-item-title>{{ propiedad.titulo }}</v-list-item-title>
                <v-list-item-subtitle>{{ priceProperty(propiedad.precio) }}</v-list-item-subtitle>

                <template v-slot:append>
                    <v-btn
                        variant="flat"
                        class="mr-2"
                        color="info"
                        :to="{name: 'editar-propiedad', params: { id: propiedad.id }}"
                    >
                        Editar
                    </v-btn>
                    <v-btn
                        variant="flat"
                        color="red-darken-3"
                    >
                        Eliminar
                    </v-btn>
                </template>

            </v-list-item>
        </v-list>
    </v-card>
</template>