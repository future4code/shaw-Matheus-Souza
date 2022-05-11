import axios from 'axios'
import { useEffect, useState } from 'react'

export const useForm = (estadoInicial) => {
    const [formulario, setForm] = useState(estadoInicial);
    const onChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...formulario, [name]: value });
    };
    const limpaInputs = () => {
      setForm(estadoInicial);
    };
    return { formulario, onChange, limpaInputs };
  }