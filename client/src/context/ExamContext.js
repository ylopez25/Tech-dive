
import { createContext, useContext, useState } from 'react';

const ExamContext = createContext();

export function useExamContext() {
    return useContext(ExamContext);
}

export function ExamProvider({ children }) {
    const [exam, setExam] = useState(null);

    const updateExam = (newExam) => {
        setExam(newExam);
    };

    return (
        <ExamContext.Provider value={{ exam, updateExam }}>
            {children}
        </ExamContext.Provider>
    );
}
