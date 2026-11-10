
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { useRecetas } from '../Contextos/RecetasContext';

export default function Detalle() {

    const { recetaSeleccionada } = useRecetas();

    return (
        <ScrollView
            style={styles.contenedor}
            contentContainerStyle={styles.contenido}
        >

            <Text style={styles.titulo}>Detalle de la Receta</Text>

            {recetaSeleccionada ? (

                <View style={styles.tarjeta}>

                    <Text style={styles.etiqueta}>
                        RECETA #{recetaSeleccionada.id}
                    </Text>

                    <Text style={styles.nombre}>
                        {recetaSeleccionada.nombre}
                    </Text>

                    <Text style={styles.subtitulo}>
                        Ingredientes:
                    </Text>

                    {recetaSeleccionada.ingredientes.map((ingrediente, index) => (
                        <Text key={index} style={styles.ingrediente}>
                            • {ingrediente}
                        </Text>
                    ))}

                    <View style={styles.separador} />

                    <Text style={styles.fecha}>
                        Fecha de ingreso de Receta: {recetaSeleccionada.fecha}
                    </Text>

                </View>

            ) : (

                <Text style={styles.vacio}>
                    No hay ninguna receta seleccionada.
                </Text>

            )}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#FFF8F5'
    },
    contenido: {
        flexGrow: 1,
        padding: 20
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#81545B',
        textAlign: 'center',
        marginBottom: 25
    },
    tarjeta: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: '#F2D5D9'
    },
    etiqueta: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#B98289',
        marginBottom: 10
    },
    nombre: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#81545B',
        marginBottom: 20
    },
    subtitulo: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#81545B',
        marginBottom: 10
    },
    ingrediente: {
        fontSize: 15,
        color: '#6F6062',
        marginBottom: 8
    },
    separador: {
        height: 1,
        backgroundColor: '#F2D5D9',
        marginVertical: 15
    },
    fecha: {
        fontSize: 14,
        color: '#B98289'
    },
    vacio: {
        textAlign: 'center',
        color: '#B98289',
        fontSize: 16
    }
});


