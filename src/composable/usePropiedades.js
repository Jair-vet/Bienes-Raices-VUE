import { collection, doc, deleteDoc } from 'firebase/firestore'
import { computed, ref } from 'vue'
import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire'
import { ref as storageRef, deleteObject } from 'firebase/storage'


export default function usePropiedades(){

    const alberca = ref(false)

    const storage = useFirebaseStorage()
    const db = useFirestore()
    const propiedadesCollection = useCollection(collection(db, 'propiedades'))

    async function deleteItem(id, urlImage){
        if(confirm('Desea Eliminar esta propiedad')){
            const docRef = doc(db, 'propiedades', id)
            const imageRef = storageRef(storage, urlImage)

            await Promise.all([
                deleteDoc(docRef),
                deleteObject(imageRef)
            ])
        }
    }

    const propiedadesFiltradas = computed(() => {
        return alberca.value ?
            propiedadesCollection.value.filter( p => p.alberca) :
            propiedadesCollection.value
    })

    return{ 
        alberca,
        propiedadesCollection,
        propiedadesFiltradas,
        deleteItem
    }
}