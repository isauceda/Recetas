
import React, { createContext, useContext, useState } from 'react';
import { Receta } from '../modelos/Receta';

interface RecetasContextType {
    recetas: Receta[];
    recetaSeleccionada: Receta | undefined;
    agregarReceta: (nombre: string, ingredientes: string[], fecha: string) => void;
    eliminarReceta: (id: number) => void;
    buscarReceta: (id: number) => Receta | undefined;
    seleccionarReceta: (id: number) => void;
}

const RecetasContext = createContext<RecetasContextType | undefined>(undefined);

export const RecetasProvider = ({ children }: { children: React.ReactNode }) => {

    const [recetas, setRecetas] = useState<Receta[]>([]);
    const [siguienteId, setSiguienteId] = useState(1);
    const [recetaSeleccionada, setRecetaSeleccionada] =
        useState<Receta | undefined>(undefined);

    const agregarReceta = (
        nombre: string,
        ingredientes: string[],
        fecha: string
    ) => {
        const nuevaReceta: Receta = {
            id: siguienteId,
            nombre,
            ingredientes,
            fecha
        };

        setRecetas([...recetas, nuevaReceta]);
        setSiguienteId(siguienteId + 1);
    };

    const eliminarReceta = (id: number) => {
        setRecetas(recetas.filter(receta => receta.id !== id));

        if (recetaSeleccionada?.id === id) {
            setRecetaSeleccionada(undefined);
        }
    };

    const buscarReceta = (id: number) => {
        return recetas.find(receta => receta.id === id);
    };

    const seleccionarReceta = (id: number) => {
        const resultado = buscarReceta(id);
        setRecetaSeleccionada(resultado);
    };

    return (
        <RecetasContext.Provider
            value={{
                recetas,
                recetaSeleccionada,
                agregarReceta,
                eliminarReceta,
                buscarReceta,
                seleccionarReceta
            }}
        >
            {children}
        </RecetasContext.Provider>
    );
};

export const useRecetas = () => {
    const contexto = useContext(RecetasContext);

    if (!contexto) {
        throw new Error('error al cargar la receta');
    }

    return contexto;
};

