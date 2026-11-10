
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

export default function Agregar() {

    const { agregarReceta } = useRecetas();

    const [nombre, setNombre] = useState('');
    const [ingrediente1, setIngrediente1] = useState('');
    const [ingrediente2, setIngrediente2] = useState('');
    const [ingrediente3, setIngrediente3] = useState('');
    const [ingrediente4, setIngrediente4] = useState('');
    const [ingrediente5, setIngrediente5] = useState('');
    const [fecha, setFecha] = useState('');

    const guardar = () => {

        const ingredientes = [
            ingrediente1,
            ingrediente2,
            ingrediente3,
            ingrediente4,
            ingrediente5
        ].filter(i => i.trim() !== '');

        if (
            nombre.trim() === '' ||
            ingredientes.length === 0 ||
            fecha.trim() === ''
        ) {
            Alert.alert(
                'Atención',
                'Completa todos los campos obligatorios'
            );
            return;
        }

        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fecha)) {
            Alert.alert(
                'Atención',
                'Ingresa una fecha válida'
            );
            return;
        }

        agregarReceta(nombre, ingredientes, fecha);

        Alert.alert('Éxito', 'Receta agregada correctamente');

        setNombre('');
        setIngrediente1('');
        setIngrediente2('');
        setIngrediente3('');
        setIngrediente4('');
        setIngrediente5('');
        setFecha('');

        router.back();
    };

    return (
        <ScrollView style={styles.contenedor}>
            <Text style={styles.titulo}>Agrega la Receta</Text>

            <Text style={styles.label}>Nombre de la receta</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre de tu receta"
                value={nombre}
                onChangeText={setNombre}
            />

            <Text style={styles.label}>Ingredientes (máximo 5)</Text>

            <TextInput
                style={styles.input}
                placeholder="Ingrediente 1"
                value={ingrediente1}
                onChangeText={setIngrediente1}
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrediente 2"
                value={ingrediente2}
                onChangeText={setIngrediente2}
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrediente 3"
                value={ingrediente3}
                onChangeText={setIngrediente3}
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrediente 4"
                value={ingrediente4}
                onChangeText={setIngrediente4}
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrediente 5"
                value={ingrediente5}
                onChangeText={setIngrediente5}
            />

            <Text style={styles.label}>Fecha de creación</Text>

            <TextInput
                style={styles.input}
                placeholder="DD/MM/AAAA"
                placeholderTextColor="#B99A9E"
                value={fecha}
                onChangeText={(texto) => {
                    const limpio = texto.replace(/\D/g, '').slice(0, 8);

                    let formato = limpio;

                    if (limpio.length > 2) {
                        formato =
                            limpio.slice(0, 2) + '/' +
                            limpio.slice(2);
                    }

                    if (limpio.length > 4) {
                        formato =
                            limpio.slice(0, 2) + '/' +
                            limpio.slice(2, 4) + '/' +
                            limpio.slice(4);
                    }

                    setFecha(formato);
                }}
                keyboardType="numeric"
                maxLength={10}
            />

            <TouchableOpacity
                style={styles.boton}
                onPress={guardar}
            >
                <Text style={styles.textoBoton}>
                    Guardar Receta
                </Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#FFF8F5',
        padding: 20
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#81545B',
        textAlign: 'center',
        marginBottom: 25
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#81545B',
        marginBottom: 8,
        marginTop: 10
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E8B8C0',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        color: '#59464A'
    },
    boton: {
        backgroundColor: '#F4C6CC',
        padding: 16,
        borderRadius: 15,
        alignItems: 'center',
        marginVertical: 20
    },
    textoBoton: {
        color: '#754B50',
        fontSize: 17,
        fontWeight: 'bold'
    }
});


