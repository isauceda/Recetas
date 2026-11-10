
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { useRecetas } from '../Contextos/RecetasContext';

export default function ListaRecetas() {

    const { recetas, eliminarReceta } = useRecetas();

    const eliminar = (id: number) => {
        Alert.alert(
            'Eliminar receta',
            '¿Estás segura de que deseas eliminar esta receta?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Eliminar',
                    onPress: () => eliminarReceta(id),
                    style: 'destructive'
                }
            ]
        );
    };

    return (
        <ScrollView style={styles.contenedor}>
            <Text style={styles.titulo}>Lista de Recetas</Text>

            <Text style={styles.total}>
                Total de recetas: {recetas.length}
            </Text>

            {recetas.length === 0 ? (
                <Text style={styles.vacio}>
                    No hay recetas registradas.
                </Text>
            ) : (
                recetas.map((receta) => (
                    <View key={receta.id} style={styles.tarjeta}>

                        <Text style={styles.nombre}>
                            {receta.id}. {receta.nombre}
                        </Text>

                        <Text style={styles.fecha}>
                            Fecha: {receta.fecha}
                        </Text>

                        <Text style={styles.subtitulo}>
                            Ingredientes:
                        </Text>

                        {receta.ingredientes.map((ingrediente, index) => (
                            <Text key={index} style={styles.ingrediente}>
                                • {ingrediente}
                            </Text>
                        ))}

                        <TouchableOpacity
                            style={styles.botonEliminar}
                            onPress={() => eliminar(receta.id)}
                        >
                            <Text style={styles.textoBoton}>
                                Eliminar Receta
                            </Text>
                        </TouchableOpacity>

                    </View>
                ))
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#e6d7c6',
        padding: 20
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#33ad31',
        textAlign: 'center',
        marginBottom: 15
    },
    total: {
        fontSize: 17,
        color: '#555',
        marginBottom: 20,
        textAlign: 'center'
    },
    vacio: {
        fontSize: 17,
        textAlign: 'center',
        marginTop: 30,
        color: '#777'
    },
    tarjeta: {
        backgroundColor: 'white',
        padding: 18,
        borderRadius: 12,
        marginBottom: 18,
        borderWidth: 1,
        borderColor: '#E6B88A'
    },
    nombre: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#8B4513',
        marginBottom: 10
    },
    fecha: {
        fontSize: 15,
        color: '#555',
        marginBottom: 10
    },
    subtitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#8B4513'
    },
    ingrediente: {
        fontSize: 15,
        color: '#512626',
        marginBottom: 4
    },
    botonEliminar: {
        backgroundColor: '#22b722',
        padding: 13,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15
    },
    textoBoton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    }
});
