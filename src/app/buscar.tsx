
import { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { router } from 'expo-router';
import { useRecetas } from '../Contextos/RecetasContext';

export default function Buscar() {

    const { buscarReceta, seleccionarReceta } = useRecetas();
    const [numero, setNumero] = useState('');

    const buscar = () => {

        if (numero.trim() === '') {
            Alert.alert('Atención', 'Ingresa el número de la receta');
            return;
        }

        const resultado = buscarReceta(Number(numero));

        if (resultado) {
            seleccionarReceta(resultado.id);
            router.push('/detalle');
        } else {
            Alert.alert('No encontrada', 'No existe una receta con ese número');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.contenedor}>

            <Text style={styles.titulo}>Buscar Receta</Text>

            <Text style={styles.label}>Número de receta</Text>

            <TextInput
                style={styles.input}
                placeholder="Ejemplo: 1"
                keyboardType="numeric"
                value={numero}
                onChangeText={setNumero}
            />

            <TouchableOpacity
                style={styles.boton}
                onPress={buscar}
            >
                <Text style={styles.textoBoton}>Buscar Receta</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flexGrow: 1,
        backgroundColor: '#FFF8F5',
        padding: 20,
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#81545B',
        textAlign: 'center',
        marginBottom: 30
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#81545B',
        marginBottom: 10
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E8B8C0',
        borderRadius: 12,
        padding: 14,
        marginBottom: 20,
        color: '#59464A'
    },
    boton: {
        backgroundColor: '#E4E1F7',
        padding: 16,
        borderRadius: 15,
        alignItems: 'center'
    },
    textoBoton: {
        color: '#514B75',
        fontSize: 17,
        fontWeight: 'bold'
    }
});
