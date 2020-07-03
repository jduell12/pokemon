import * as Yup from 'yup';

const regionFormSchema = Yup.object().shape({
    region: Yup 
        .string()
        .oneOf(['Alola', 'Galar', 'Hoenn', 'Johto', 'Kanto', 'Sinnoh', 'Unova'])
});


export {regionFormSchema};
