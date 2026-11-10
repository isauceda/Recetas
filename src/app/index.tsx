
import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Inicio() {
  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <View style={styles.logo}>
        <Text style={styles.nombre}>Recetas de Ingrid</Text>
        <Text style={styles.subtitulo}>El mundo del Sabor</Text>
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.bienvenida}>
          ¡Hola!
        </Text>

        <Text style={styles.descripcion}>
          Guarda tu menu favorito.
        </Text>
      </View>

      <View style={styles.opciones}>
        <TouchableOpacity
          style={styles.botonAgregar}
          onPress={() => router.push('/agregar')}
        >
        <Text style={styles.textoBoton}>Agregar Receta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonLista}
          onPress={() => router.push('/recetas')}
        >
        <Text style={styles.textoBoton}>Lista de Recetas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonBuscar}
          onPress={() => router.push('/buscar')}
        >
        <Text style={styles.textoBoton}>Buscar Detalles de la Receta</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    backgroundColor: '#FFF8F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  logo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  icono: {
    fontSize: 65,
  },
  nombre: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#81545B',
  },
  subtitulo: {
    fontSize: 15,
    color: '#B98289',
    marginTop: 5,
  },
  tarjeta: {
    backgroundColor: '#FADDE1',
    width: '100%',
    padding: 22,
    borderRadius: 22,
    marginBottom: 25,
    alignItems: 'center',
  },
  bienvenida: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#754B50',
    marginBottom: 12,
  },
  descripcion: {
    fontSize: 15,
    color: '#755D60',
    textAlign: 'center',
    lineHeight: 23,
  },
  opciones: {
    width: '100%',
    gap: 15,
  },
  botonAgregar: {
    backgroundColor: '#F4C6CC',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botonLista: {
    backgroundColor: '#DDEEDB',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botonBuscar: {
    backgroundColor: '#E4E1F7',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconoBoton: {
    fontSize: 22,
    marginRight: 12,
  },
  textoBoton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#59464A',
  },
  pie: {
    marginTop: 35,
    color: '#B98289',
    fontSize: 13,
  },
});

