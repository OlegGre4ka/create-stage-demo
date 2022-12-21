import { useState } from "react";

export default function useModal() {
    const [isModal, setIsModal] = useState(false);

    const closeModal = () => setIsModal(false);
    const openModal = () => setIsModal(true);
    
    return [isModal, openModal, closeModal];
}