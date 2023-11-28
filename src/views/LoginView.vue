<script setup>
    import { useForm, useField } from 'vee-validate'
    import { loginSchema as validationSchema } from '../validation/loginSchema'

    const { handleSubmit } = useForm({ validationSchema })

    const email = useField('email')
    const password = useField('password')

    const submit  = handleSubmit(() => {
        console.log('Submit...');
    })



</script>

<template>
    <v-card
        flat
        max-width="600"
        class="mx-auto my-10"
    >
        <v-card-title
            class="text-h4 font-weight-bold"
            tag="h3"
        >
            Iniciar Sesión
        </v-card-title>

        <!-- Formulario -->
        <v-form class="mt-5">
            <v-text-field 
                type="email"
                label="Email"
                bg-color="blue-grey-lighten-5"
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
            />
            <v-text-field 
                type="password"
                label="Password"
                bg-color="blue-grey-lighten-5"
                v-model="password.value.value"
                :error-messages="password.errorMessage.value"
            />

            <v-btn 
                block
                color="teal-darken-1"
                @click="submit"
            >
                Iniciar Sesión
            </v-btn>
        </v-form>
    </v-card>
</template>
