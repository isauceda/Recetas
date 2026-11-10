
import { Stack } from 'expo-router';
import { RecetasProvider } from '../Contextos/RecetasContext';

export default function RootLayout() {
    return (
        <RecetasProvider>
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#FADDE1',
                    },
                    headerTintColor: '#81545B',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    contentStyle: {
                        backgroundColor: '#FFF8F5',
                    },
                }}
            >
                <Stack.Screen
                    name="index"
                    options={{ title: 'Mis Recetas' }}
                />

                <Stack.Screen
                    name="agregar"
                    options={{ title: 'Agregar Receta' }}
                />

                <Stack.Screen
                    name="recetas"
                    options={{ title: 'Lista de Recetas' }}
                />

                <Stack.Screen
                    name="detalle"
                    options={{ title: 'Buscar Receta' }}
                />
            </Stack>
        </RecetasProvider>
    );
}
